import express from 'express'

const router = express.Router()

import { registerShop, updateShop } from '../controllers/shopController.js'

import { protect, admin, shopOwner } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, admin, registerShop)
  .put(protect, shopOwner, updateShop)

export default router
