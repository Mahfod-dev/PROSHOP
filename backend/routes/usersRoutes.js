import express from 'express'
const router = express.Router()

import {
	authUser,
	getUserProfile,
	registerUser,
} from '../controllers/usersControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/register').post(registerUser)

export default router
