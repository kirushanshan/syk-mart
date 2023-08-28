import express from 'express'

const router = express.Router()

import {
  createCategory,
  getCategories,
} from '../controllers/categoryController.js'

router.route('/').post(createCategory).get(getCategories)

export default router
