const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");

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
		title: { type: Text },
		body: { type: Text },
		icoFont:{ type: Text},
		status: {
			type: Select,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	}}