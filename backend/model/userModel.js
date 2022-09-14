const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()

const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: { type: String, required: true, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
    phone: { type: String, required: true },
    tokens: [{
        token: { type: String, required: true }
    }],
    verified: { type: Boolean, default: false }

})

// generating jwt token and assign to each user
userSchema.methods.generateToken = async function () {
    const user = this
    
    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token})

    await user.save()

    return token
}

// hashing user password
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = new mongoose.model('users', userSchema)



module.exports = { User }