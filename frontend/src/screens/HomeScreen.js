import React from 'react'
import { listProduct } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)

	console.log(productList)

	const { loading, error, products } = productList
	// const [products, setProducts] = useState([])

	useEffect(() => {
		dispatch(listProduct())
		// const fecthProducts = async()=>{
		// 	const {data} = await axios.get('/api/products')
		// 	setProducts(data)
		// }
		// fecthProducts()
	}, [dispatch])

	const product = products.map((product) => {
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
				<h2>...Loading</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<Row>{product}</Row>
			)}
		</>
	)
}

export default HomeScreen
