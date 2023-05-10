import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsersProfile,
  udateUsersProfile,
  getUsers,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUsersProfile)
  .put(protect, udateUsersProfile)

export default router
