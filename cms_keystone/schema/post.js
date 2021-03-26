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
