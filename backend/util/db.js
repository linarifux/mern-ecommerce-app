require('dotenv').config()
const mongoose = require('mongoose')
const URI = process.env.MONGO_URI

const connect = async () => {
    try{
        await mongoose.connect(URI)
        console.log('Database Connected...');
    }catch(e){
        console.log('Somehting went wrong while connecting to Database');
    }
}

module.exports = connect