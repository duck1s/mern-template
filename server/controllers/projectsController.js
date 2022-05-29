const asyncHandler = require('express-async-handler')

const Project = require('../models/projectModel')

const getProjects = asyncHandler(async (req, res) => {
	const projects = await Project.find({})

	res.status(200).json(projects)
})

const setProject = asyncHandler(async (req, res) => {
	if (!req.body.title || !req.body.description) {
		res.status(400)
		throw new Error('Please add a title and description')
	}

	const project = await Project.create({
		title: req.body.title,
		description: req.body.description,
	})

	res.status(200).json(project)
})

const updateProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id)

	if (!project) {
		res.status(400)
		throw new Error('Goal not found')
	}

	const updatedProject = await Project.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	)

	res.status(200).json(updatedProject)
})

const deleteProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id)

	if (!project) {
		res.status(400)
		throw new Error('Project not found')
	}

	await project.remove()

	res.status(200).json({ id: req.params.id })
})

const getProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id)

	res.status(200).json(project)
})

module.exports = {
	getProjects,
	setProject,
	updateProject,
	deleteProject,
	getProject,
}
