const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    mainImage: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    featured: {type: Boolean, default: false}
})


const Product = new mongoose.model('products', productSchema)

module.exports = {Product}