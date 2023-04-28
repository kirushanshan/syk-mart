import express from "express"
const router = express.Router()
import { authUser, registerUser, getUsersProfile } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"


router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUsersProfile)

export default router