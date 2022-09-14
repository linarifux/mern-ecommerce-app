const express = require('express')
const { createUser } = require('../controller/userController')

const router = express.Router()


router.post('/new', createUser)


module.exports = router