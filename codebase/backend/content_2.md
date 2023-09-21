const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
.env
cert
--------------------------------------------------
const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
.env
cert
--------------------------------------------------
const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
.env
cert
--------------------------------------------------
const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
	Url
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const { staticRoute, staticPath } = require("../config.ts");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	// read: userOwnsItem || isUserAdmin ||true,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/avatars`,
	path: `${staticRoute}/avatars`,
});

module.exports.User = {
	fields: {
		name: {
			type: Text,
			access: { ...defaultFieldAccess, read: true },
		},
		email: {
			type: Text,
			isUnique: true,
			access: defaultFieldAccess,
		},
		password: {
			type: Password,
			access: defaultFieldAccess, //TODO
		},
		isAdmin: {
			type: Checkbox,
			access: {
				...defaultFieldAccess,
				// create: () => false
			},
		},
		avatar: { type: File, adapter: avatarFileAdapter },
	},
};

//TODO: move skills and subskills here since they are part of a user.

module.exports.Interest = {
	schemaDoc: "Interests of a user.",
	fields: {
		title: { type: Text, isRequired: true },
		body: { type: Text },
		icoFont: { type: Text },
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	},
};

module.exports.Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired: true, isUnique: true },
		value: { type: Integer, isRequired: true, defaultValue: 0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		heading: { type: Text, isRequired: true },
		body: { type: Wysiwyg },
		color: {
			type: Color,
			isRequired: true,
			isUnique: true,
		},
	},
	labelResolver: item => item.title,
};

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'naqib.info/subskill',
  });

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		// image: { type: Url },
		image: { type: CloudinaryImage, adapter: fileAdapter },
		link: { type: Url },

		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
--------------------------------------------------
const {
	File,
	Text,
	Slug,
	DateTime,
	Relationship,
	Select,
	Checkbox,
} = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, byTracking } = require("@keystonejs/list-plugins");
const {
	AuthedRelationship,
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

const {
	isUserAdmin,
	isUserAuthenticated,
	userOwnsItem,
} = require("../access-control");
const { staticRoute, staticPath } = require("../config.ts");

const cloudfileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: "naqib.info/blogs",
});

const localfileAdapter = new LocalFileAdapter({
	src: `${staticPath}${staticRoute}/blogs`,
	path: `${staticRoute}/blogs`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	// read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: false },

		author: {
			type: AuthedRelationship,
			ref: "User",
			isRequired: true,
			access: defaultFieldAccess,
		},
		categories: {
			type: Relationship,
			ref: "PostCategory",
			many: true,
		},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
		heading: { type: Text },
		body: { type: Wysiwyg },
		posted: {
			type: DateTime,
			format: "dd/MM/yyyy",
			defaultValue: ({ context, originalInput }) => {
				var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
				var localISOTime = new Date(Date.now() - tzoffset)
					.toISOString()
					.slice(0, -1);

				return localISOTime;
			},
		},
		// image: {
		// 	type: File,
		// 	adapter: localfileAdapter,
		// 	hooks: {
		// 		beforeChange: async ({ existingItem }) => {
		// 			if (existingItem && existingItem.image) {
		// 				console.log("going to delete!");
		// 				console.log(existingItem.image);
		// 				try {
		// 					await localfileAdapter.delete(existingItem.image);
		// 				} catch (error) {
		// 					console.log("File not found trying to delete the file");
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		image: { type: CloudinaryImage, adapter: cloudfileAdapter },
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
		tags: {
			type: Relationship,
			ref: "Tag.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: async ({ existingItem }) => {
			console.log("afterDelete");
			if (existingItem.image) {
				console.log("going to delete!");
				console.log(existingItem.image);
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	labelResolver: (item) =>
		`${item.status === "draft" ? "DRAFT - " : ""}` + item.title,
};

const PostCategory = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
	},
};

module.exports = { Post, PostCategory };
--------------------------------------------------
const {
	Text,
	Checkbox,
	Relationship,
	DateTime,
} = require("@keystonejs/fields");
const { Markdown } = require("@keystonejs/fields-markdown");
const { isUserAdmin } = require("../access-control");
const striptags = require("striptags");

const Comment = {
	schemaDoc: "Fresh hot-takes from the internet",
	fields: {
		name: { type: Text, schemaDoc: "Display name for Users", isRequired: true },
		email: {
			type: Text,
			schemaDoc: "Email - could be used for user validation",
			isRequired: true,
			access: {
				read: isUserAdmin, // Protect emails
				create: true,
				update: isUserAdmin,
			},
		},
		body: {
			type: Markdown,
			schemaDoc: "The opinion",
			isRequired: true,
		},
		date: {
			type: DateTime,
			schemaDoc: "Time of the opinion",
			format: "MM/DD/YYYY h:mm A",
			access: {
				read: true,
				create: true,
				update: isUserAdmin,
			},
		},
		approved: {
			type: Checkbox,
			schemaDoc: "Only approved comments are shown",
			access: {
				read: true,
				create: isUserAdmin,
				update: isUserAdmin,
			},
		},
		replies: { type: Relationship, ref: "Comment", many: true },
		page: { type: Relationship, ref: "Page.comments" },
		post: { type: Relationship, ref: "Post.comments" },
		user: { type: Relationship, ref: "User" },
	},
	access: {
		read: ({ authentication: { item } }) => {
			if (item && item.isAdmin) {
				return {}; // Don't filter items for admin users
			}
			// Return only approved comments for non-admin users
			return {
				approved: true,
			};
		},
		create: true,
		update: isUserAdmin,
		delete: isUserAdmin,
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			if (resolvedData.body) {
				return {
					...resolvedData,
					date: new Date().toISOString(),
					body: striptags(resolvedData.body), // Don't allow any HTML
				};
			}
			return resolvedData;
		},
	},
};

module.exports = { Comment };
--------------------------------------------------
const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text, isUnique: true, isRequired: true },
		slug: { type: Slug, from: "name", isUnique: true, isRequired: true },
		page: { type: Relationship, ref: "Page.tags" },
		post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
--------------------------------------------------
const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
.env
cert
--------------------------------------------------
