import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc Create new order
// @route POST /api/category
// @access Private
const createCategory = asyncHandler(async (req, res) => {
  const category = new Category({
    name: req.body.categoryName,
  })

  const createCategory = await category.save()
  res.status(201).json(createCategory)
})

// @desc Fetch all categoriews
// @route Get /api/category
// @access Fetch public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find()
  res.json(categories)
})

export { createCategory, getCategories }
