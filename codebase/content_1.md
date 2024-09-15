const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

// var privateKey = fs.readFileSync("./cert/localhost.key").toString();
// var certificate = fs.readFileSync("./cert/localhost.crt").toString();

// var credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ciphers:
// 		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
// 	honorCipherOrder: true,
// 	secureProtocol: "TLSv1_2_method",
// };

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = process.env.PORT;

		// if (dev) {
		// 	//http only
			server = http.createServer(app);
			console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			// server = https.createServer(credentials, app);
			// console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN rm -rf node_modules/@keystonejs/keystone/node_modules/graphql
# Bundle app source
COPY . .


CMD [ "npm", "start" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2--------------------------------------------------
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const expressSession = require("express-session"); //REVIEW: what does this do?
const MongoStore = require("connect-mongo")(expressSession); //REVIEW: what does this do?
require("dotenv").config();

const { User, Interest, Skill, SubSkill } = require("./schema/user.js");
const { Comment } = require("./schema/comment.ts");
const { Page } = require("./schema/page.js");
const { Tag } = require("./schema/tags.ts");
const { Post, PostCategory } = require("./schema/post.js");
const { staticRoute, staticPath, distDir } = require("./config.ts");

const initialiseData = require("./initial-data");

var mongoUri; // Database connection

const PROJECT_NAME = "cms_naqib";

var mongoUri = process.env.MONGO_URL === undefined
			? "mongodb://localhost/cms-naqib"
			: process.env.MONGO_URL;


const cookieSecret = process.env.cookieSecret;

const adapterConfig = { mongoUri };

// console.log(cookieSecret);
console.log(mongoUri);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	secureCookies: false, //TODO: We're setting this to false so it works cross-domain and with non-https - You might want to set it to true.
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
	cookie: {
		// secure: process.env.NODE_ENV === "production", // Default to true in production
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: true,
	},
	cookieSecret,
	sessionStore: new MongoStore({ url: mongoUri }),
});

keystone.createList("User", User);
keystone.createList("Comment", Comment);
keystone.createList("Page", Page);
keystone.createList("PostCategory", PostCategory);
keystone.createList("Post", Post);
keystone.createList("SubSkill", SubSkill);
keystone.createList("Skill", Skill);
keystone.createList("Tag", Tag);
keystone.createList("Interest", Interest);

const logAuth = ({ hooks, ...options }) => {
	return {
	  ...options,
	  hooks: {
		afterAuth: () => console.log('A user logged in!'),
		...hooks,
	  },
	};
  };
const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	plugin: [logAuth],
});


module.exports = {
	keystone,
	apps: [
		new GraphQLApp({
			apollo: {
				cacheControl: {
					defaultMaxAge: 3600,
				},
			},
		}),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy:
				process.env.NODE_ENV === "production" ? adminAuthStrategy : null,
			isAccessAllowed: ({ authentication: { item } }) => {
				return item && item.isAdmin; // Only allow admin to access the UI
			},
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
--------------------------------------------------
const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
	// Count existing users
	const {
		data: {
			_allUsersMeta: { count = 0 },
		},
	} = await keystone.executeGraphQL({
		context: keystone.createContext({ skipAccessControl: true }),
		query: `query {
      _allUsersMeta {
        count
      }
    }`,
	});

	if (count === 0) {
		const password = "backdoor";
		const email = "admin@naqib.info";

		const { errors } = await keystone.executeGraphQL({
			context: keystone.createContext({ skipAccessControl: true }),
			query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
			variables: { password, email },
		});

		if (errors) {
			console.log("failed to create initial user:");
			console.log(errors);
		} else {
			console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
		}
	}
};
--------------------------------------------------
Dev Eninronemntv
- Create a newtowkr called mynetwork
    ``` docker network create mynetwork``--------------------------------------------------
const createPageIfNotExists = async (keystone, data) => {
  const list = keystone.lists.Page;
  let existingItem = await list.adapter.findOne({
    path: data.path
  });

  if (!existingItem) {
    existingItem = await list.adapter.create(data);
  }

  return existingItem;
};

const ADD_COMMENT = `
  mutation AddComment($id: ID!, $comment: CommentCreateInput!) {
    updatePage(id: $id, data: { comments:{ create:[$comment] } }){
      id
    }
  }`;

const ADD_BOOKMARK = `
mutation AddBookmark($user: ID!, $page: ID!) {
  updateUser(
      id: $user, 
      data: { 
        bookmarks: { connect: {id: $page} } 
      }
  ){
    id
  }
}`;

module.exports = {
  customMutations: keystone => {
    const incrementClap = async (_, { path, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;
      const list = keystone.lists.Page;

      const newItem = await list.adapter.update(id, {
        ...page,
        claps: (page.claps || 0) + 1
      });
      return newItem;
    };

    const addComment = async (_, { path, comment, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_COMMENT, {
        variables: { id, comment }
      });

      return page;
    };

    const addBookmark = async (_, { path, user, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_BOOKMARK, {
        variables: { user, page: id }
      });

      const list = keystone.lists.User;
      const userItem = await list.adapter.findById(user);
      return userItem;
    };

    return [
      {
        schema: `clap(path: String!, pageTitle: String): Page`,
        resolver: incrementClap
      },
      {
        schema: `addComment(path: String!, pageTitle: String, comment: CommentCreateInput!): Page`,
        resolver: addComment
      },
      {
        schema: `addBookmark(path: String!, pageTitle: String, user: ID!): User`,
        resolver: addBookmark
      }
    ];
  }
};
--------------------------------------------------
const { Text, Integer, Relationship, File } = require("@keystonejs/fields");
const { isUserAdmin } = require("../access-control");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");


const { staticRoute, staticPath } = require("../config.ts");

const fileAdapter = new LocalFileAdapter({
	src:`${staticPath}${staticRoute}/projects`,
	path: `${staticRoute}/projects`,
});

const defaultFieldAccess = {
  create: isUserAdmin, // This will be ignored by custom mutation
  update: isUserAdmin,
  read: true
};

const Page = {
  schemaDoc: "Page data",
  fields: {
    name: {
      type: Text,
      schemaDoc: "Name of page",
      access: defaultFieldAccess
    },
    image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						console.log("going to delete!")
				console.log(existingItem.image)
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
    path: {
      type: Text,
      schemaDoc: "Unique path for page",
      isUnique: true,
      isRequired: true,
      access: defaultFieldAccess
    },
    claps: {
      type: Integer,
      schemaDoc: "The number of claps"
    },
    heading: { type: Text },
		body: { type: Wysiwyg },
    comments: {
      type: Relationship,
      ref: "Comment.page",
      many: true
    },
    tags: {
			type: Relationship,
			ref: "Tag.page",
			many: true,
    },
    
  },
  access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	plugins: [byTracking(), atTracking()],
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete")
			if (existingItem.image) {
				console.log("going to delete!")
				console.log(existingItem.image)
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
};

module.exports = { Page };
--------------------------------------------------
const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

// var privateKey = fs.readFileSync("./cert/localhost.key").toString();
// var certificate = fs.readFileSync("./cert/localhost.crt").toString();

// var credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ciphers:
// 		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
// 	honorCipherOrder: true,
// 	secureProtocol: "TLSv1_2_method",
// };

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = process.env.PORT;

		// if (dev) {
		// 	//http only
			server = http.createServer(app);
			console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			// server = https.createServer(credentials, app);
			// console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN rm -rf node_modules/@keystonejs/keystone/node_modules/graphql
# Bundle app source
COPY . .


CMD [ "npm", "start" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2--------------------------------------------------
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const expressSession = require("express-session"); //REVIEW: what does this do?
const MongoStore = require("connect-mongo")(expressSession); //REVIEW: what does this do?
require("dotenv").config();

const { User, Interest, Skill, SubSkill } = require("./schema/user.js");
const { Comment } = require("./schema/comment.ts");
const { Page } = require("./schema/page.js");
const { Tag } = require("./schema/tags.ts");
const { Post, PostCategory } = require("./schema/post.js");
const { staticRoute, staticPath, distDir } = require("./config.ts");

const initialiseData = require("./initial-data");

var mongoUri; // Database connection

const PROJECT_NAME = "cms_naqib";

var mongoUri = process.env.MONGO_URL === undefined
			? "mongodb://localhost/cms-naqib"
			: process.env.MONGO_URL;


const cookieSecret = process.env.cookieSecret;

const adapterConfig = { mongoUri };

// console.log(cookieSecret);
console.log(mongoUri);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	secureCookies: false, //TODO: We're setting this to false so it works cross-domain and with non-https - You might want to set it to true.
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
	cookie: {
		// secure: process.env.NODE_ENV === "production", // Default to true in production
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: true,
	},
	cookieSecret,
	sessionStore: new MongoStore({ url: mongoUri }),
});

keystone.createList("User", User);
keystone.createList("Comment", Comment);
keystone.createList("Page", Page);
keystone.createList("PostCategory", PostCategory);
keystone.createList("Post", Post);
keystone.createList("SubSkill", SubSkill);
keystone.createList("Skill", Skill);
keystone.createList("Tag", Tag);
keystone.createList("Interest", Interest);

const logAuth = ({ hooks, ...options }) => {
	return {
	  ...options,
	  hooks: {
		afterAuth: () => console.log('A user logged in!'),
		...hooks,
	  },
	};
  };
const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	plugin: [logAuth],
});


module.exports = {
	keystone,
	apps: [
		new GraphQLApp({
			apollo: {
				cacheControl: {
					defaultMaxAge: 3600,
				},
			},
		}),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy:
				process.env.NODE_ENV === "production" ? adminAuthStrategy : null,
			isAccessAllowed: ({ authentication: { item } }) => {
				return item && item.isAdmin; // Only allow admin to access the UI
			},
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
--------------------------------------------------
const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
	// Count existing users
	const {
		data: {
			_allUsersMeta: { count = 0 },
		},
	} = await keystone.executeGraphQL({
		context: keystone.createContext({ skipAccessControl: true }),
		query: `query {
      _allUsersMeta {
        count
      }
    }`,
	});

	if (count === 0) {
		const password = "backdoor";
		const email = "admin@naqib.info";

		const { errors } = await keystone.executeGraphQL({
			context: keystone.createContext({ skipAccessControl: true }),
			query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
			variables: { password, email },
		});

		if (errors) {
			console.log("failed to create initial user:");
			console.log(errors);
		} else {
			console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
		}
	}
};
--------------------------------------------------
Dev Eninronemntv
- Create a newtowkr called mynetwork
    ``` docker network create mynetwork``--------------------------------------------------
const createPageIfNotExists = async (keystone, data) => {
  const list = keystone.lists.Page;
  let existingItem = await list.adapter.findOne({
    path: data.path
  });

  if (!existingItem) {
    existingItem = await list.adapter.create(data);
  }

  return existingItem;
};

const ADD_COMMENT = `
  mutation AddComment($id: ID!, $comment: CommentCreateInput!) {
    updatePage(id: $id, data: { comments:{ create:[$comment] } }){
      id
    }
  }`;

const ADD_BOOKMARK = `
mutation AddBookmark($user: ID!, $page: ID!) {
  updateUser(
      id: $user, 
      data: { 
        bookmarks: { connect: {id: $page} } 
      }
  ){
    id
  }
}`;

module.exports = {
  customMutations: keystone => {
    const incrementClap = async (_, { path, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;
      const list = keystone.lists.Page;

      const newItem = await list.adapter.update(id, {
        ...page,
        claps: (page.claps || 0) + 1
      });
      return newItem;
    };

    const addComment = async (_, { path, comment, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_COMMENT, {
        variables: { id, comment }
      });

      return page;
    };

    const addBookmark = async (_, { path, user, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_BOOKMARK, {
        variables: { user, page: id }
      });

      const list = keystone.lists.User;
      const userItem = await list.adapter.findById(user);
      return userItem;
    };

    return [
      {
        schema: `clap(path: String!, pageTitle: String): Page`,
        resolver: incrementClap
      },
      {
        schema: `addComment(path: String!, pageTitle: String, comment: CommentCreateInput!): Page`,
        resolver: addComment
      },
      {
        schema: `addBookmark(path: String!, pageTitle: String, user: ID!): User`,
        resolver: addBookmark
      }
    ];
  }
};
--------------------------------------------------
const { Text, Integer, Relationship, File } = require("@keystonejs/fields");
const { isUserAdmin } = require("../access-control");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");


const { staticRoute, staticPath } = require("../config.ts");

const fileAdapter = new LocalFileAdapter({
	src:`${staticPath}${staticRoute}/projects`,
	path: `${staticRoute}/projects`,
});

const defaultFieldAccess = {
  create: isUserAdmin, // This will be ignored by custom mutation
  update: isUserAdmin,
  read: true
};

const Page = {
  schemaDoc: "Page data",
  fields: {
    name: {
      type: Text,
      schemaDoc: "Name of page",
      access: defaultFieldAccess
    },
    image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						console.log("going to delete!")
				console.log(existingItem.image)
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
    path: {
      type: Text,
      schemaDoc: "Unique path for page",
      isUnique: true,
      isRequired: true,
      access: defaultFieldAccess
    },
    claps: {
      type: Integer,
      schemaDoc: "The number of claps"
    },
    heading: { type: Text },
		body: { type: Wysiwyg },
    comments: {
      type: Relationship,
      ref: "Comment.page",
      many: true
    },
    tags: {
			type: Relationship,
			ref: "Tag.page",
			many: true,
    },
    
  },
  access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	plugins: [byTracking(), atTracking()],
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete")
			if (existingItem.image) {
				console.log("going to delete!")
				console.log(existingItem.image)
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
};

module.exports = { Page };
--------------------------------------------------
const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

// var privateKey = fs.readFileSync("./cert/localhost.key").toString();
// var certificate = fs.readFileSync("./cert/localhost.crt").toString();

// var credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ciphers:
// 		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
// 	honorCipherOrder: true,
// 	secureProtocol: "TLSv1_2_method",
// };

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = process.env.PORT;

		// if (dev) {
		// 	//http only
			server = http.createServer(app);
			console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			// server = https.createServer(credentials, app);
			// console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN rm -rf node_modules/@keystonejs/keystone/node_modules/graphql
# Bundle app source
COPY . .


CMD [ "npm", "start" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2--------------------------------------------------
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const expressSession = require("express-session"); //REVIEW: what does this do?
const MongoStore = require("connect-mongo")(expressSession); //REVIEW: what does this do?
require("dotenv").config();

const { User, Interest, Skill, SubSkill } = require("./schema/user.js");
const { Comment } = require("./schema/comment.ts");
const { Page } = require("./schema/page.js");
const { Tag } = require("./schema/tags.ts");
const { Post, PostCategory } = require("./schema/post.js");
const { staticRoute, staticPath, distDir } = require("./config.ts");

const initialiseData = require("./initial-data");

var mongoUri; // Database connection

const PROJECT_NAME = "cms_naqib";

var mongoUri = process.env.MONGO_URL === undefined
			? "mongodb://localhost/cms-naqib"
			: process.env.MONGO_URL;


const cookieSecret = process.env.cookieSecret;

const adapterConfig = { mongoUri };

// console.log(cookieSecret);
console.log(mongoUri);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	secureCookies: false, //TODO: We're setting this to false so it works cross-domain and with non-https - You might want to set it to true.
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
	cookie: {
		// secure: process.env.NODE_ENV === "production", // Default to true in production
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: true,
	},
	cookieSecret,
	sessionStore: new MongoStore({ url: mongoUri }),
});

keystone.createList("User", User);
keystone.createList("Comment", Comment);
keystone.createList("Page", Page);
keystone.createList("PostCategory", PostCategory);
keystone.createList("Post", Post);
keystone.createList("SubSkill", SubSkill);
keystone.createList("Skill", Skill);
keystone.createList("Tag", Tag);
keystone.createList("Interest", Interest);

const logAuth = ({ hooks, ...options }) => {
	return {
	  ...options,
	  hooks: {
		afterAuth: () => console.log('A user logged in!'),
		...hooks,
	  },
	};
  };
const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	plugin: [logAuth],
});


module.exports = {
	keystone,
	apps: [
		new GraphQLApp({
			apollo: {
				cacheControl: {
					defaultMaxAge: 3600,
				},
			},
		}),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy:
				process.env.NODE_ENV === "production" ? adminAuthStrategy : null,
			isAccessAllowed: ({ authentication: { item } }) => {
				return item && item.isAdmin; // Only allow admin to access the UI
			},
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
--------------------------------------------------
const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
	// Count existing users
	const {
		data: {
			_allUsersMeta: { count = 0 },
		},
	} = await keystone.executeGraphQL({
		context: keystone.createContext({ skipAccessControl: true }),
		query: `query {
      _allUsersMeta {
        count
      }
    }`,
	});

	if (count === 0) {
		const password = "backdoor";
		const email = "admin@naqib.info";

		const { errors } = await keystone.executeGraphQL({
			context: keystone.createContext({ skipAccessControl: true }),
			query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
			variables: { password, email },
		});

		if (errors) {
			console.log("failed to create initial user:");
			console.log(errors);
		} else {
			console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
		}
	}
};
--------------------------------------------------
Dev Eninronemntv
- Create a newtowkr called mynetwork
    ``` docker network create mynetwork``--------------------------------------------------
const createPageIfNotExists = async (keystone, data) => {
  const list = keystone.lists.Page;
  let existingItem = await list.adapter.findOne({
    path: data.path
  });

  if (!existingItem) {
    existingItem = await list.adapter.create(data);
  }

  return existingItem;
};

const ADD_COMMENT = `
  mutation AddComment($id: ID!, $comment: CommentCreateInput!) {
    updatePage(id: $id, data: { comments:{ create:[$comment] } }){
      id
    }
  }`;

const ADD_BOOKMARK = `
mutation AddBookmark($user: ID!, $page: ID!) {
  updateUser(
      id: $user, 
      data: { 
        bookmarks: { connect: {id: $page} } 
      }
  ){
    id
  }
}`;

module.exports = {
  customMutations: keystone => {
    const incrementClap = async (_, { path, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;
      const list = keystone.lists.Page;

      const newItem = await list.adapter.update(id, {
        ...page,
        claps: (page.claps || 0) + 1
      });
      return newItem;
    };

    const addComment = async (_, { path, comment, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_COMMENT, {
        variables: { id, comment }
      });

      return page;
    };

    const addBookmark = async (_, { path, user, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_BOOKMARK, {
        variables: { user, page: id }
      });

      const list = keystone.lists.User;
      const userItem = await list.adapter.findById(user);
      return userItem;
    };

    return [
      {
        schema: `clap(path: String!, pageTitle: String): Page`,
        resolver: incrementClap
      },
      {
        schema: `addComment(path: String!, pageTitle: String, comment: CommentCreateInput!): Page`,
        resolver: addComment
      },
      {
        schema: `addBookmark(path: String!, pageTitle: String, user: ID!): User`,
        resolver: addBookmark
      }
    ];
  }
};
--------------------------------------------------
const { Text, Integer, Relationship, File } = require("@keystonejs/fields");
const { isUserAdmin } = require("../access-control");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");


const { staticRoute, staticPath } = require("../config.ts");

const fileAdapter = new LocalFileAdapter({
	src:`${staticPath}${staticRoute}/projects`,
	path: `${staticRoute}/projects`,
});

const defaultFieldAccess = {
  create: isUserAdmin, // This will be ignored by custom mutation
  update: isUserAdmin,
  read: true
};

const Page = {
  schemaDoc: "Page data",
  fields: {
    name: {
      type: Text,
      schemaDoc: "Name of page",
      access: defaultFieldAccess
    },
    image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						console.log("going to delete!")
				console.log(existingItem.image)
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
    path: {
      type: Text,
      schemaDoc: "Unique path for page",
      isUnique: true,
      isRequired: true,
      access: defaultFieldAccess
    },
    claps: {
      type: Integer,
      schemaDoc: "The number of claps"
    },
    heading: { type: Text },
		body: { type: Wysiwyg },
    comments: {
      type: Relationship,
      ref: "Comment.page",
      many: true
    },
    tags: {
			type: Relationship,
			ref: "Tag.page",
			many: true,
    },
    
  },
  access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	plugins: [byTracking(), atTracking()],
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete")
			if (existingItem.image) {
				console.log("going to delete!")
				console.log(existingItem.image)
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
};

module.exports = { Page };
--------------------------------------------------
const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

// var privateKey = fs.readFileSync("./cert/localhost.key").toString();
// var certificate = fs.readFileSync("./cert/localhost.crt").toString();

// var credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ciphers:
// 		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
// 	honorCipherOrder: true,
// 	secureProtocol: "TLSv1_2_method",
// };

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = process.env.PORT;

		// if (dev) {
		// 	//http only
			server = http.createServer(app);
			console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			// server = https.createServer(credentials, app);
			// console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN rm -rf node_modules/@keystonejs/keystone/node_modules/graphql
# Bundle app source
COPY . .


CMD [ "npm", "start" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2--------------------------------------------------
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const expressSession = require("express-session"); //REVIEW: what does this do?
const MongoStore = require("connect-mongo")(expressSession); //REVIEW: what does this do?
require("dotenv").config();

const { User, Interest, Skill, SubSkill } = require("./schema/user.js");
const { Comment } = require("./schema/comment.ts");
const { Page } = require("./schema/page.js");
const { Tag } = require("./schema/tags.ts");
const { Post, PostCategory } = require("./schema/post.js");
const { staticRoute, staticPath, distDir } = require("./config.ts");

const initialiseData = require("./initial-data");

var mongoUri; // Database connection

const PROJECT_NAME = "cms_naqib";

var mongoUri = process.env.MONGO_URL === undefined
			? "mongodb://localhost/cms-naqib"
			: process.env.MONGO_URL;


const cookieSecret = process.env.cookieSecret;

const adapterConfig = { mongoUri };

// console.log(cookieSecret);
console.log(mongoUri);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	secureCookies: false, //TODO: We're setting this to false so it works cross-domain and with non-https - You might want to set it to true.
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
	cookie: {
		// secure: process.env.NODE_ENV === "production", // Default to true in production
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: true,
	},
	cookieSecret,
	sessionStore: new MongoStore({ url: mongoUri }),
});

keystone.createList("User", User);
keystone.createList("Comment", Comment);
keystone.createList("Page", Page);
keystone.createList("PostCategory", PostCategory);
keystone.createList("Post", Post);
keystone.createList("SubSkill", SubSkill);
keystone.createList("Skill", Skill);
keystone.createList("Tag", Tag);
keystone.createList("Interest", Interest);

const logAuth = ({ hooks, ...options }) => {
	return {
	  ...options,
	  hooks: {
		afterAuth: () => console.log('A user logged in!'),
		...hooks,
	  },
	};
  };
const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	plugin: [logAuth],
});


module.exports = {
	keystone,
	apps: [
		new GraphQLApp({
			apollo: {
				cacheControl: {
					defaultMaxAge: 3600,
				},
			},
		}),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy:
				process.env.NODE_ENV === "production" ? adminAuthStrategy : null,
			isAccessAllowed: ({ authentication: { item } }) => {
				return item && item.isAdmin; // Only allow admin to access the UI
			},
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
--------------------------------------------------
const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
	// Count existing users
	const {
		data: {
			_allUsersMeta: { count = 0 },
		},
	} = await keystone.executeGraphQL({
		context: keystone.createContext({ skipAccessControl: true }),
		query: `query {
      _allUsersMeta {
        count
      }
    }`,
	});

	if (count === 0) {
		const password = "backdoor";
		const email = "admin@naqib.info";

		const { errors } = await keystone.executeGraphQL({
			context: keystone.createContext({ skipAccessControl: true }),
			query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
			variables: { password, email },
		});

		if (errors) {
			console.log("failed to create initial user:");
			console.log(errors);
		} else {
			console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
		}
	}
};
--------------------------------------------------
Dev Eninronemntv
- Create a newtowkr called mynetwork
    ``` docker network create mynetwork``--------------------------------------------------
const createPageIfNotExists = async (keystone, data) => {
  const list = keystone.lists.Page;
  let existingItem = await list.adapter.findOne({
    path: data.path
  });

  if (!existingItem) {
    existingItem = await list.adapter.create(data);
  }

  return existingItem;
};

const ADD_COMMENT = `
  mutation AddComment($id: ID!, $comment: CommentCreateInput!) {
    updatePage(id: $id, data: { comments:{ create:[$comment] } }){
      id
    }
  }`;

const ADD_BOOKMARK = `
mutation AddBookmark($user: ID!, $page: ID!) {
  updateUser(
      id: $user, 
      data: { 
        bookmarks: { connect: {id: $page} } 
      }
  ){
    id
  }
}`;

module.exports = {
  customMutations: keystone => {
    const incrementClap = async (_, { path, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;
      const list = keystone.lists.Page;

      const newItem = await list.adapter.update(id, {
        ...page,
        claps: (page.claps || 0) + 1
      });
      return newItem;
    };

    const addComment = async (_, { path, comment, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_COMMENT, {
        variables: { id, comment }
      });

      return page;
    };

    const addBookmark = async (_, { path, user, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_BOOKMARK, {
        variables: { user, page: id }
      });

      const list = keystone.lists.User;
      const userItem = await list.adapter.findById(user);
      return userItem;
    };

    return [
      {
        schema: `clap(path: String!, pageTitle: String): Page`,
        resolver: incrementClap
      },
      {
        schema: `addComment(path: String!, pageTitle: String, comment: CommentCreateInput!): Page`,
        resolver: addComment
      },
      {
        schema: `addBookmark(path: String!, pageTitle: String, user: ID!): User`,
        resolver: addBookmark
      }
    ];
  }
};
--------------------------------------------------
const { Text, Integer, Relationship, File } = require("@keystonejs/fields");
const { isUserAdmin } = require("../access-control");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");


const { staticRoute, staticPath } = require("../config.ts");

const fileAdapter = new LocalFileAdapter({
	src:`${staticPath}${staticRoute}/projects`,
	path: `${staticRoute}/projects`,
});

const defaultFieldAccess = {
  create: isUserAdmin, // This will be ignored by custom mutation
  update: isUserAdmin,
  read: true
};

const Page = {
  schemaDoc: "Page data",
  fields: {
    name: {
      type: Text,
      schemaDoc: "Name of page",
      access: defaultFieldAccess
    },
    image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						console.log("going to delete!")
				console.log(existingItem.image)
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
    path: {
      type: Text,
      schemaDoc: "Unique path for page",
      isUnique: true,
      isRequired: true,
      access: defaultFieldAccess
    },
    claps: {
      type: Integer,
      schemaDoc: "The number of claps"
    },
    heading: { type: Text },
		body: { type: Wysiwyg },
    comments: {
      type: Relationship,
      ref: "Comment.page",
      many: true
    },
    tags: {
			type: Relationship,
			ref: "Tag.page",
			many: true,
    },
    
  },
  access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	plugins: [byTracking(), atTracking()],
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete")
			if (existingItem.image) {
				console.log("going to delete!")
				console.log(existingItem.image)
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
};

module.exports = { Page };
--------------------------------------------------
const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

// var privateKey = fs.readFileSync("./cert/localhost.key").toString();
// var certificate = fs.readFileSync("./cert/localhost.crt").toString();

// var credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ciphers:
// 		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
// 	honorCipherOrder: true,
// 	secureProtocol: "TLSv1_2_method",
// };

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = process.env.PORT;

		// if (dev) {
		// 	//http only
			server = http.createServer(app);
			console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			// server = https.createServer(credentials, app);
			// console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN rm -rf node_modules/@keystonejs/keystone/node_modules/graphql
# Bundle app source
COPY . .


CMD [ "npm", "start" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2--------------------------------------------------
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const expressSession = require("express-session"); //REVIEW: what does this do?
const MongoStore = require("connect-mongo")(expressSession); //REVIEW: what does this do?
require("dotenv").config();

const { User, Interest, Skill, SubSkill } = require("./schema/user.js");
const { Comment } = require("./schema/comment.ts");
const { Page } = require("./schema/page.js");
const { Tag } = require("./schema/tags.ts");
const { Post, PostCategory } = require("./schema/post.js");
const { staticRoute, staticPath, distDir } = require("./config.ts");

const initialiseData = require("./initial-data");

var mongoUri; // Database connection

const PROJECT_NAME = "cms_naqib";

var mongoUri = process.env.MONGO_URL === undefined
			? "mongodb://localhost/cms-naqib"
			: process.env.MONGO_URL;


const cookieSecret = process.env.cookieSecret;

const adapterConfig = { mongoUri };

// console.log(cookieSecret);
console.log(mongoUri);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	secureCookies: false, //TODO: We're setting this to false so it works cross-domain and with non-https - You might want to set it to true.
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
	cookie: {
		// secure: process.env.NODE_ENV === "production", // Default to true in production
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: true,
	},
	cookieSecret,
	sessionStore: new MongoStore({ url: mongoUri }),
});

keystone.createList("User", User);
keystone.createList("Comment", Comment);
keystone.createList("Page", Page);
keystone.createList("PostCategory", PostCategory);
keystone.createList("Post", Post);
keystone.createList("SubSkill", SubSkill);
keystone.createList("Skill", Skill);
keystone.createList("Tag", Tag);
keystone.createList("Interest", Interest);

const logAuth = ({ hooks, ...options }) => {
	return {
	  ...options,
	  hooks: {
		afterAuth: () => console.log('A user logged in!'),
		...hooks,
	  },
	};
  };
const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	plugin: [logAuth],
});


module.exports = {
	keystone,
	apps: [
		new GraphQLApp({
			apollo: {
				cacheControl: {
					defaultMaxAge: 3600,
				},
			},
		}),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy:
				process.env.NODE_ENV === "production" ? adminAuthStrategy : null,
			isAccessAllowed: ({ authentication: { item } }) => {
				return item && item.isAdmin; // Only allow admin to access the UI
			},
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
--------------------------------------------------
const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
	// Count existing users
	const {
		data: {
			_allUsersMeta: { count = 0 },
		},
	} = await keystone.executeGraphQL({
		context: keystone.createContext({ skipAccessControl: true }),
		query: `query {
      _allUsersMeta {
        count
      }
    }`,
	});

	if (count === 0) {
		const password = "backdoor";
		const email = "admin@naqib.info";

		const { errors } = await keystone.executeGraphQL({
			context: keystone.createContext({ skipAccessControl: true }),
			query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
			variables: { password, email },
		});

		if (errors) {
			console.log("failed to create initial user:");
			console.log(errors);
		} else {
			console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
		}
	}
};
--------------------------------------------------
Dev Eninronemntv
- Create a newtowkr called mynetwork
    ``` docker network create mynetwork``--------------------------------------------------
const createPageIfNotExists = async (keystone, data) => {
  const list = keystone.lists.Page;
  let existingItem = await list.adapter.findOne({
    path: data.path
  });

  if (!existingItem) {
    existingItem = await list.adapter.create(data);
  }

  return existingItem;
};

const ADD_COMMENT = `
  mutation AddComment($id: ID!, $comment: CommentCreateInput!) {
    updatePage(id: $id, data: { comments:{ create:[$comment] } }){
      id
    }
  }`;

const ADD_BOOKMARK = `
mutation AddBookmark($user: ID!, $page: ID!) {
  updateUser(
      id: $user, 
      data: { 
        bookmarks: { connect: {id: $page} } 
      }
  ){
    id
  }
}`;

module.exports = {
  customMutations: keystone => {
    const incrementClap = async (_, { path, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;
      const list = keystone.lists.Page;

      const newItem = await list.adapter.update(id, {
        ...page,
        claps: (page.claps || 0) + 1
      });
      return newItem;
    };

    const addComment = async (_, { path, comment, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_COMMENT, {
        variables: { id, comment }
      });

      return page;
    };

    const addBookmark = async (_, { path, user, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_BOOKMARK, {
        variables: { user, page: id }
      });

      const list = keystone.lists.User;
      const userItem = await list.adapter.findById(user);
      return userItem;
    };

    return [
      {
        schema: `clap(path: String!, pageTitle: String): Page`,
        resolver: incrementClap
      },
      {
        schema: `addComment(path: String!, pageTitle: String, comment: CommentCreateInput!): Page`,
        resolver: addComment
      },
      {
        schema: `addBookmark(path: String!, pageTitle: String, user: ID!): User`,
        resolver: addBookmark
      }
    ];
  }
};
--------------------------------------------------
const { Text, Integer, Relationship, File } = require("@keystonejs/fields");
const { isUserAdmin } = require("../access-control");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");


const { staticRoute, staticPath } = require("../config.ts");

const fileAdapter = new LocalFileAdapter({
	src:`${staticPath}${staticRoute}/projects`,
	path: `${staticRoute}/projects`,
});

const defaultFieldAccess = {
  create: isUserAdmin, // This will be ignored by custom mutation
  update: isUserAdmin,
  read: true
};

const Page = {
  schemaDoc: "Page data",
  fields: {
    name: {
      type: Text,
      schemaDoc: "Name of page",
      access: defaultFieldAccess
    },
    image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						console.log("going to delete!")
				console.log(existingItem.image)
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
    path: {
      type: Text,
      schemaDoc: "Unique path for page",
      isUnique: true,
      isRequired: true,
      access: defaultFieldAccess
    },
    claps: {
      type: Integer,
      schemaDoc: "The number of claps"
    },
    heading: { type: Text },
		body: { type: Wysiwyg },
    comments: {
      type: Relationship,
      ref: "Comment.page",
      many: true
    },
    tags: {
			type: Relationship,
			ref: "Tag.page",
			many: true,
    },
    
  },
  access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	plugins: [byTracking(), atTracking()],
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete")
			if (existingItem.image) {
				console.log("going to delete!")
				console.log(existingItem.image)
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
};

module.exports = { Page };
--------------------------------------------------
const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

// var privateKey = fs.readFileSync("./cert/localhost.key").toString();
// var certificate = fs.readFileSync("./cert/localhost.crt").toString();

// var credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ciphers:
// 		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
// 	honorCipherOrder: true,
// 	secureProtocol: "TLSv1_2_method",
// };

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = process.env.PORT;

		// if (dev) {
		// 	//http only
			server = http.createServer(app);
			console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			// server = https.createServer(credentials, app);
			// console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
--------------------------------------------------
# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=12.20.0
# https://github.com/Yelp/dumb-init/releases
# ARG DUMB_INIT_VERSION=1.2.2

# Build Runtime container
FROM node:${NODE_VERSION}-alpine AS build
# ARG DUMB_INIT_VERSION

WORKDIR /home/node

# Install app dependencies
#   A wildcard is used to ensure both package.json AND package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN rm -rf node_modules/@keystonejs/keystone/node_modules/graphql
# Bundle app source
COPY . .


CMD [ "npm", "start" ] 

# Change user to node. Better Security before running node/ 
# USER node 
# CMD ["./dumb-init", "node", "server.js"]

# Bash commands
# docker build -t naqib.info/cms:v1.2 .
# docker run -p 8010:5000 --net="host" -e NODE_ENV=docker_production -v /data:/data/ naqib.info/cms:v1.2--------------------------------------------------
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const expressSession = require("express-session"); //REVIEW: what does this do?
const MongoStore = require("connect-mongo")(expressSession); //REVIEW: what does this do?
require("dotenv").config();

const { User, Interest, Skill, SubSkill } = require("./schema/user.js");
const { Comment } = require("./schema/comment.ts");
const { Page } = require("./schema/page.js");
const { Tag } = require("./schema/tags.ts");
const { Post, PostCategory } = require("./schema/post.js");
const { staticRoute, staticPath, distDir } = require("./config.ts");

const initialiseData = require("./initial-data");

var mongoUri; // Database connection

const PROJECT_NAME = "cms_naqib";

var mongoUri = process.env.MONGO_URL === undefined
			? "mongodb://localhost/cms-naqib"
			: process.env.MONGO_URL;


const cookieSecret = process.env.cookieSecret;

const adapterConfig = { mongoUri };

// console.log(cookieSecret);
console.log(mongoUri);
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	secureCookies: false, //TODO: We're setting this to false so it works cross-domain and with non-https - You might want to set it to true.
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
	cookie: {
		// secure: process.env.NODE_ENV === "production", // Default to true in production
		secure: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: true,
	},
	cookieSecret,
	sessionStore: new MongoStore({ url: mongoUri }),
});

keystone.createList("User", User);
keystone.createList("Comment", Comment);
keystone.createList("Page", Page);
keystone.createList("PostCategory", PostCategory);
keystone.createList("Post", Post);
keystone.createList("SubSkill", SubSkill);
keystone.createList("Skill", Skill);
keystone.createList("Tag", Tag);
keystone.createList("Interest", Interest);

const logAuth = ({ hooks, ...options }) => {
	return {
	  ...options,
	  hooks: {
		afterAuth: () => console.log('A user logged in!'),
		...hooks,
	  },
	};
  };
const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	plugin: [logAuth],
});


module.exports = {
	keystone,
	apps: [
		new GraphQLApp({
			apollo: {
				cacheControl: {
					defaultMaxAge: 3600,
				},
			},
		}),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy:
				process.env.NODE_ENV === "production" ? adminAuthStrategy : null,
			isAccessAllowed: ({ authentication: { item } }) => {
				return item && item.isAdmin; // Only allow admin to access the UI
			},
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
--------------------------------------------------
const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
	// Count existing users
	const {
		data: {
			_allUsersMeta: { count = 0 },
		},
	} = await keystone.executeGraphQL({
		context: keystone.createContext({ skipAccessControl: true }),
		query: `query {
      _allUsersMeta {
        count
      }
    }`,
	});

	if (count === 0) {
		const password = "backdoor";
		const email = "admin@naqib.info";

		const { errors } = await keystone.executeGraphQL({
			context: keystone.createContext({ skipAccessControl: true }),
			query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
			variables: { password, email },
		});

		if (errors) {
			console.log("failed to create initial user:");
			console.log(errors);
		} else {
			console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
		}
	}
};
--------------------------------------------------
Dev Eninronemntv
- Create a newtowkr called mynetwork
    ``` docker network create mynetwork``--------------------------------------------------
const createPageIfNotExists = async (keystone, data) => {
  const list = keystone.lists.Page;
  let existingItem = await list.adapter.findOne({
    path: data.path
  });

  if (!existingItem) {
    existingItem = await list.adapter.create(data);
  }

  return existingItem;
};

const ADD_COMMENT = `
  mutation AddComment($id: ID!, $comment: CommentCreateInput!) {
    updatePage(id: $id, data: { comments:{ create:[$comment] } }){
      id
    }
  }`;

const ADD_BOOKMARK = `
mutation AddBookmark($user: ID!, $page: ID!) {
  updateUser(
      id: $user, 
      data: { 
        bookmarks: { connect: {id: $page} } 
      }
  ){
    id
  }
}`;

module.exports = {
  customMutations: keystone => {
    const incrementClap = async (_, { path, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;
      const list = keystone.lists.Page;

      const newItem = await list.adapter.update(id, {
        ...page,
        claps: (page.claps || 0) + 1
      });
      return newItem;
    };

    const addComment = async (_, { path, comment, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_COMMENT, {
        variables: { id, comment }
      });

      return page;
    };

    const addBookmark = async (_, { path, user, pageTitle }) => {
      const page = await createPageIfNotExists(keystone, {
        path,
        name: pageTitle
      });
      const { id } = page;

      await keystone.executeQuery(ADD_BOOKMARK, {
        variables: { user, page: id }
      });

      const list = keystone.lists.User;
      const userItem = await list.adapter.findById(user);
      return userItem;
    };

    return [
      {
        schema: `clap(path: String!, pageTitle: String): Page`,
        resolver: incrementClap
      },
      {
        schema: `addComment(path: String!, pageTitle: String, comment: CommentCreateInput!): Page`,
        resolver: addComment
      },
      {
        schema: `addBookmark(path: String!, pageTitle: String, user: ID!): User`,
        resolver: addBookmark
      }
    ];
  }
};
--------------------------------------------------
const { Text, Integer, Relationship, File } = require("@keystonejs/fields");
const { isUserAdmin } = require("../access-control");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");


const { staticRoute, staticPath } = require("../config.ts");

const fileAdapter = new LocalFileAdapter({
	src:`${staticPath}${staticRoute}/projects`,
	path: `${staticRoute}/projects`,
});

const defaultFieldAccess = {
  create: isUserAdmin, // This will be ignored by custom mutation
  update: isUserAdmin,
  read: true
};

const Page = {
  schemaDoc: "Page data",
  fields: {
    name: {
      type: Text,
      schemaDoc: "Name of page",
      access: defaultFieldAccess
    },
    image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						console.log("going to delete!")
				console.log(existingItem.image)
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
    path: {
      type: Text,
      schemaDoc: "Unique path for page",
      isUnique: true,
      isRequired: true,
      access: defaultFieldAccess
    },
    claps: {
      type: Integer,
      schemaDoc: "The number of claps"
    },
    heading: { type: Text },
		body: { type: Wysiwyg },
    comments: {
      type: Relationship,
      ref: "Comment.page",
      many: true
    },
    tags: {
			type: Relationship,
			ref: "Tag.page",
			many: true,
    },
    
  },
  access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	plugins: [byTracking(), atTracking()],
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete")
			if (existingItem.image) {
				console.log("going to delete!")
				console.log(existingItem.image)
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
};

module.exports = { Page };
--------------------------------------------------
