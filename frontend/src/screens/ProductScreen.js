import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { listProductDetail } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductScreen = () => {
	const [qty, setQty] = useState(1)

	const dispatch = useDispatch()
	const history = useHistory()

	const productDetails = useSelector((state) => state.productDetails)

	const { loading, error, product } = productDetails

	const addHandleCart = () => {
		history.push(`/cart/${id}?qty=${qty}`)
	}

	const { id } = useParams()
	useEffect(() => {
		dispatch(listProductDetail(id))
	}, [dispatch, id])

	return (
		<>
			<Link to='/' className='btn btn-light my-3'>
				Go back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>Price:${product.price}</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Quantity </Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={(e) => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map(
														(product, index) => {
															return (
																<option key={index} value={product + 1}>
																	{product + 1}
																</option>
															)
														}
													)}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}
								<ListGroup.Item>
									<Button
										className='btn-block'
										type='button'
										onClick={addHandleCart}
										disabled={product.countInStock === 0}>
										ADD TO CART
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	)
}

export default ProductScreen
