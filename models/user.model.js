const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  markers: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('User', UserSchema)