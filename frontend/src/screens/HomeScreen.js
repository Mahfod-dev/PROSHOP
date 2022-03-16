import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products')

			setProduct(data)
		}
		fetchProducts()
	}, [])

	const products = product.map((product) => {
		return (
			<Col key={product._id} sm={12} md={4} lg={2} xl={4}>
				<Product product={product} />
			</Col>
		)
	})

	return (
		<>
			<h1>Latest Products</h1>
			<Row>{products}</Row>
		</>
	)
}

export default HomeScreen
