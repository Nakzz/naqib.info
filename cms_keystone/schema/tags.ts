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
