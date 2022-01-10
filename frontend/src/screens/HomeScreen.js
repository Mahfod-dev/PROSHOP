import React from 'react'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)

	const { loading, error, products } = productList
	console.log(productList)
	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	const allProduct = products.map((product) => {
		return (
			<Col key={product._id} sm={12} md={4} lg={2} xl={4}>
				<Product product={product} />
			</Col>
		)
	})

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>{allProduct}</Row>
			)}
		</>
	)
}

export default HomeScreen
