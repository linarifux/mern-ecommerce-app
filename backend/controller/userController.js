require('dotenv').config()

const { User } = require('../model/userModel')
const nodeMailer = require('nodemailer')


// create new user
const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const newUser = new User(req.body)
        const newToken = await newUser.generateToken()
        res.status(201).send(newUser)

    } catch (e) {
        res.status(500).send('error while creating user')
    }
}

// get user with Email

const getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.id })
        if (!user) {
            return res.status(200).json({ message: 'good to go' })
        }
        res.status(500).json({ message: 'user found' })
    } catch (e) {
        res.status(500).send('somethng wrong')
    }
}


// get user with ID

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send('No User Found')
        }
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
}

// updating an user by ID
const updateUser = async (req, res) => {
    const allowedUpdates = [fullName, password, phone, verified, imageUrl]
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))


    if (!isValidOperation) {
        return res.status(500).send('Invalid Operation!')
    }

    try {
        const user = await User.findById(req.params.id)
        updates.forEach(update => user[update] = req.body[update])

        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
}



// creating opt before crating new user account
const createOtp = async (req, res) => {

    const mailTransport = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.NODE_MAILER_MAIL,
            pass: process.env.NODE_MAILER_GMAIL_PASSWORD
        }
    })

    const code = Math.floor(Math.random() * 1000000)

    const mail = {
        from: process.env.NODE_MAILER_MAIL,
        to: req.body.email,
        subject: 'VOID PRODUCTION - OTP',
        text: `Your verification code is: ${code}`
    }

    try {
        mailTransport.sendMail(mail, (e) => {
            if (e) {
                return res.status(500).json({ message: 'Email send failed', error: e })
            }
            res.status(201).json({code})
        })
    } catch (e) {
        res.status(500).send(e)
    }

}

// delete an user with ID

const deleteById = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send('No user found!')
        }
        res.status(201).send(user)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports = { createUser, getUserById, createOtp, updateUser, getUserByEmail, deleteById }