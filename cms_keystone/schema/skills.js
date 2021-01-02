const { Text, Integer, Relationship } = require("@keystonejs/fields");
const { Color } = require('@keystonejs/fields-color');

const Skill = {
	schemaDoc: "Skill data",
	fields: {
		title: { type: Text, isRequired:true, isUnique:true},
		value: { type: Integer, isRequired:true, defaultValue:0 },
		subSkills: {
			type: Relationship,
			ref: "SubSkill.skill",
			many: true,
		},
		color: {
			type: Color, isRequired:true,isUnique:true
		}
	},
};

const SubSkill = {
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

module.exports = { Skill, SubSkill };
