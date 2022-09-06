const { Product } = require('../model/productModel')

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(500).send(e)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch (e) {
        res.status(500).send(e)
    }
}


const getOneProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).send('No products matched with the ID')
        }
        res.status(200).send(product)
    } catch (e) {
        res.status(500).send(e)
    }
}

const updateProductById = async (req, res) => {
    const updateAbleFields = ['title', 'description', 'price', 'mainImage']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every(update => updateAbleFields.includes(update))
    
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid Update'})
    }
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!product){
            return res.status(400).send()
        }
        res.send(product)
    } catch (e) {
        res.status(500).send(e)
    }
}


const deleteProductById = async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(404).send('No record found!')
        }
        res.status(201).send(product)
    }catch(e){
        res.status(500).send(e)
    }
}


module.exports = { createProduct, getAllProducts, getOneProductById, updateProductById, deleteProductById }