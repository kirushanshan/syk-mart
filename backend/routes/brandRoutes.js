import express from 'express'

const router = express.Router()

import { createBrand, getBrands } from '../controllers/brandController.js'

router.route('/').post(createBrand).get(getBrands)

export default router
