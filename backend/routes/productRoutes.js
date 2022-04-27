import express from 'express'
import mongoose from 'mongoose'

import asyncHandler from 'express-async-handler'

const router = express.Router()

express.json()

import Product from '../models/productModel.js'

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		// res.status(401)
		// throw new Error('Not Authorized')
		res.json(products)
	})
)
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		console.log(req.params.id)

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