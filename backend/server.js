import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
<<<<<<< HEAD

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
=======
import productRoutes from './routes/productRoutes.js '
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
<<<<<<< HEAD
	res.send('API IS RUNNING')
})

app.use('/api/products', productRoutes)

app.use(notFound, errorHandler)
=======
	res.send('API is running....')
})
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
