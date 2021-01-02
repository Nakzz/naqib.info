const { Text, Relationship, Slug } = require("@keystonejs/fields");

const Tag = {
	fields: {
		name: { type: Text },
		slug: { type: Slug, from: "name" },
        page: { type: Relationship, ref: "Page.tags" },
        post: { type: Relationship, ref: "Post.tags" },
	},
};

module.exports = { Tag };
