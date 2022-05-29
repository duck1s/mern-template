const express = require('express')
const router = express.Router()
const {
	getProjects,
	setProject,
	updateProject,
	deleteProject,
	getProject,
} = require('../controllers/projectsController')

router.route('/').get(getProjects).post(setProject)
router.route('/:id').put(updateProject).delete(deleteProject).get(getProject)

module.exports = router
