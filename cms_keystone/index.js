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

// process.env.NODE_ENV="docker_production"  //REVIEW: force builds

if (process.env.NODE_ENV === "production")
	mongoUri = "mongodb://localhost/cms-naqib";
else if (process.env.NODE_ENV === "docker_production")
	mongoUri = "mongodb://172.17.0.1:27017/cms-naqib";
// mongoUri = "mongodb://localhost:27016/cms-naqib";
else mongoUri = "mongodb://localhost/cms-naqib"; //TODO: change 

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

const adminAuthStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
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
			// authStrategy:
			// 	process.env.NODE_ENV !== undefined ? adminAuthStrategy : null,
			// isAccessAllowed: ({ authentication: { item } }) => {
			// 	return item && item.isAdmin; // Only allow admin to access the UI
			// },
		}),
		new StaticApp({
			path: "/",
			src: staticPath,
			fallback: "false",
		}),
	],
};
