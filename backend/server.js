require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

// product route
const productRoute = require('./router/productRoute')


// product schema 
const { Product } = require('./model/productModel')

/// database connection
const connectToDb = require('./util/db')

connectToDb()

// cross browser compatibility
cors()

// defining port
const port = process.env.PORT || 5000

// json parser
app.use(express.json())


// routes
// product route
app.use('/products', productRoute )



app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})