const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')

router.get('/', async (req, res) => {
	res.json(req.body)
})

router.post('/', async (req, res) => {
	const email = req.body.email
	const username = req.body.username
	const userPass = req.body.password
	try {
		User.findOne({
			email: email,
			username: username,
		}).then((response) => {
      User.findOne({
        username: username
      }).then((resp) => {
        if (resp) {
          console.log('exista user')
          res.send(resp)
        } else {
          res.send(true)
          User.create({
            username: username,
            password: userPass,
            email: email,
          })
        }
      })
    })
	} catch (error) {
		res.send(error)
	}
})

module.exports = router
