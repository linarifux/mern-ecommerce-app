const { User } = require('../model/userModel')

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        const {email} = newUser
        const userExisted = await User.findOne({email})
        if(userExisted){
            return res.status(400).send({error: 'User Existed'})
        }
        const newToken = await newUser.generateToken()
        
        res.status(201).send(newUser)

    } catch (e) {
        res.status(500).send(e)
    }
}


module.exports = { createUser }