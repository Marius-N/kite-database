const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')
const mongoose = require('mongoose')

router.put('/', async (req, res) => {

  const parsedUserId = mongoose.Types.ObjectId(req.body.userId)

  await User.findOneAndUpdate({ _id: parsedUserId }, 
    { markers: req.body.markers },
    function(err, result) {
      if(err) {
        res.send(err)
      } else {
        res.send(result)
      }
    }
  )
})

module.exports = router
