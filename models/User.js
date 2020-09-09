const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  }
}, { timestamps: true })

// const UserModel = model('User', User)

module.exports = model('User', User)