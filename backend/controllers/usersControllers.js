import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (!user) {
		throw new Error('Invalid credentials')
	}

	const isPassword = await user.comparePassword(password)

	if (user && isPassword) {
		res.json({
			_id: user._id,
			email: user.email,
			password: user.password,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('Invalid Email or Password')
	}
})

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			email: user.email,
			isAdmin: user.isAdmin,
		})
	} else {
		res.status(401)
		throw new Error('User not found')
	}
})

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body
	console.log(req.body)

	const userExists = await User.findOne({ email })

	if (userExists) {
		throw new Error('User already exists')
	}

	const user = await User.create({
		name,
		email,
		password,
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			email: user.email,

			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

export { authUser, getUserProfile, registerUser }
