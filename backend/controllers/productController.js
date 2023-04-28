import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc Fetch all products
// @route Get /api/products
// @access Fetch public
const getProducts = asyncHandler (async (req, res)  => {
    const products = await Product.find({})
    res.json(products)
})


// @desc Fetch Single  products by id
// @route Get /api/products/:id
// @access Fetch public
const getProductById = asyncHandler (async (req, res)  => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)      
    } 
    else {
        res.status(404)
        throw new Error ('Product not found')
    }
})


export {
    getProducts, getProductById
}