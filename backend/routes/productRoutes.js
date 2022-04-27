import express from 'express'
<<<<<<< HEAD
import mongoose from 'mongoose'

import asyncHandler from 'express-async-handler'

const router = express.Router()

express.json()
=======
const router = express.Router()
import asyncHandler from 'express-async-handler'
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228

import Product from '../models/productModel.js'

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
<<<<<<< HEAD
		// res.status(401)
		// throw new Error('Not Authorized')
		res.json(products)
=======

		res.json(products)
		// if (products) {
		// 	res.json(products)
		// } else {
		// 	throw new Error('Not NOT')
		// }
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228
	})
)
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
<<<<<<< HEAD
		console.log(req.params.id)

=======
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228
		const product = await Product.findById(req.params.id)

		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error('Product not found')
		}
	})
)

export default router
