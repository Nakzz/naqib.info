const {
	File,
	Text,
	Checkbox,
	Password,
	Relationship,
	Select,
	Integer,
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { Color } = require("@keystonejs/fields-color");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

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
};

module.exports.SubSkill = {
	schemaDoc: "SubSkill data",
	fields: {
		name: { type: Text },
		level: { type: Integer },
		skill: {
			type: Relationship,
			ref: "Skill.subSkills",
		},
	},
};
