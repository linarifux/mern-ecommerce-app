const express = require('express')
const { createUser, getUserById, createOtp, updateUser, getUserByEmail, deleteById} = require('../controller/userController')

const router = express.Router()


// get user with Email
router.get('/:email', getUserByEmail)

// create new user
router.post('/new', createUser)


// get user by ID
router.get('/:id', getUserById)


// update a user
router.put('/:id', updateUser)

// otp
router.post('/otp', createOtp)

// delete an user with ID
router.delete('/:id', deleteById)


module.exports = router