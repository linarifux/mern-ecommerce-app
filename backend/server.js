require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

// product route
const productRoute = require('./router/productRoute')

// User route 
const userRoute = require('./router/userRoute')


/// database connection
const connectToDb = require('./util/db')

connectToDb()



// defining port
const port = process.env.PORT || 5000

// json parser
app.use(express.json())
// cross browser compatibility
app.use(cors())


// routes
// product route
app.use('/products', productRoute )
// user route
app.use('/user', userRoute)



app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})