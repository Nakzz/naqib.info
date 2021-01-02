const {
	Text,
	Checkbox,
	Password,
	Relationship,
} = require("@keystonejs/fields");
const { userOwnsItem, isUserAdmin } = require("../access-control");

const defaultFieldAccess = {
	create: true || isUserAdmin,
	update: userOwnsItem || isUserAdmin,
	read: userOwnsItem || isUserAdmin,
};

// const defaultFieldAccess = {
//   create: true,
//   update: true,
//   read: true
// };

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
      access: { ...defaultFieldAccess, 
        // create: () => false 
      },
		},
	},
};
