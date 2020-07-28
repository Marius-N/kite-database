const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')

router.get('/', async (req, res) => {
	res.json(req.body)
})

router.post('/', async (req, res) => {
	var usern = req.body.username
	var userpass = req.body.password
	try {
		await User.findOne({ username: usern, password: userpass })
			.select()
			.then((isRight) => {
				if(isRight === null) {
					return res.json('User Not Found')
				} else {
					return res.json(isRight)
				}
			})
	} catch (error) {
		res.json(error)
	}
})

module.exports = router
