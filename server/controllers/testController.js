const asyncHandler = require('express-async-handler')

const test = asyncHandler(async (req, res) => {
	res.status(200).json({ msg: 'test' })
})

module.exports = {
	test,
}
