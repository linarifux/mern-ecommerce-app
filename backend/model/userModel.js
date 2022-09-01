const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    imageUrl: {type: String, required: true},
    phone: {type: String, required: true}
})

const User = new mongoose.model('users', userSchema)

module.exports = User