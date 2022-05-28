const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = Project = mongoose.model('projects', ProjectSchema)
