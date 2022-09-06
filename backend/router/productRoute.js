const express = require('express')
const router = express.Router()

// product controllers
const {createProduct, getAllProducts, getOneProductById, updateProductById, deleteProductById} = require('../controller/productController')


// create product
router.post('/new', createProduct)

// get all products
router.get('/all', getAllProducts)

// get one product by ID
router.get('/:id', getOneProductById)

// update one product by ID
router.put('/:id', updateProductById)

// delete one product by ID
router.delete('/:id', deleteProductById)


module.exports = router