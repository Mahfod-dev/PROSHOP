const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`)
	res.status(404)
<<<<<<< HEAD
	next(error)
}

const errorHandler = (err, req, res, next) => {
	const error = res.statusCode === 200 ? 500 : res.statusCode
	res.status(error)
=======
}

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	})
}

export { notFound, errorHandler }
