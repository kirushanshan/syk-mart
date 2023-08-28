import asyncHandler from 'express-async-handler'
import Brand from '../models/brandModel.js'

// @desc Create new order
// @route POST /api/category
// @access Private
const createBrand = asyncHandler(async (req, res) => {
  const brand = new Brand({
    name: req.body.brandName,
  })

  const createBrand = await brand.save()
  res.status(201).json(createBrand)
})

// @desc Fetch all brands
// @route Get /api/brand
// @access Fetch public
const getBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find()
  res.json(brands)
})

export { createBrand, getBrands }
