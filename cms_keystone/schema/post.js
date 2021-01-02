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
const { staticRoute, staticPath, distDir } = require("../config.ts");
// const cloudinaryAdapter = new CloudinaryAdapter({
// 	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
// 	apiKey: process.env.CLOUDINARY_KEY,
// 	apiSecret: process.env.CLOUDINARY_SECRET,
// });
const dev = process.env.NODE_ENV !== "production";

const fileAdapter = new LocalFileAdapter({
	src: `${dev ? "" : `${distDir}/`}${staticPath}/uploads`,
	path: `${staticRoute}/uploads`,
});

const avatarFileAdapter = new LocalFileAdapter({
	src: `${staticPath}/avatars`,
	path: `${staticRoute}/avatars`,
});

const defaultFieldAccess = {
	create: isUserAdmin || userOwnsItem, // This will be ignored by custom mutation
	update: isUserAdmin || userOwnsItem,
	read: true,
};

const Post = {
	schemaDoc: "Blog posts",
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: "title" },
		private: { type: Checkbox, defaultValue: true },

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
		image: {
			//TODO: fix later
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
		// image: { type: CloudinaryImage, adapter: cloudinaryAdapter }, FIXME: RangeError: Maximum call stack size exceeded on upload
		comments: {
			type: Relationship,
			ref: "Comment.post",
			many: true,
		},
	},
	plugins: [byTracking(), atTracking()],
	access: { create: isUserAdmin, read: true, update: true }, // This access control will be ignored by our custom mutations
	hooks: {
		afterDelete: ({ existingItem }) => {
			if (existingItem.image) {
				fileAdapter.delete(existingItem.image);
			}
		},
	},
};

const PostCategory = {
	fields: {
		name: { type: Text },
		slug: { type: Slug, from: "name" },
	},
};

module.exports = { Post, PostCategory };
