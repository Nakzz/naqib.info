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
