<<<<<<< HEAD:frontend/src/screens/ProductScreen.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
	// const { id } = useParams();

	// const product = products.filter((product) => product._id === match.params.id);
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${id}`);
			console.log(data);
			setProduct(data);
		};
		fetchProduct();
	}, [id]);
=======
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";


const ProductScreen = ({ match }) => {

>>>>>>> 1b4af356f84080d4a9c8e84b376389a8fc18f27b:proshop/src/screens/ProductScreen.js

	const [product, setProduct] = useState({})

	useEffect(() => {
		const fecthProduct = async () => {
			const { data } = await axios.get(`/api/products/${match.params.id}`)

			setProduct(data)
		}
		fecthProduct()
	}, [match])





	// const { id } = useParams();

// 	const product = products.find((product) =>{ 
		
// 		return product._id === match.params.id} );
// 		console.log(product);
// console.log(product.image);
	return (
		<>
			<Link to="/" className="btn btn-light my-3">
				Go back
			</Link>
			<Row>
				<Col md={6}>
<<<<<<< HEAD:frontend/src/screens/ProductScreen.js
					<Image src={product.image} alt={product.name} fluid />
=======
					<Image
						src={product.image}
						alt={product.name}
						fluid
					/>
>>>>>>> 1b4af356f84080d4a9c8e84b376389a8fc18f27b:proshop/src/screens/ProductScreen.js
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
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
<<<<<<< HEAD:frontend/src/screens/ProductScreen.js
						<ListGroup.Item>Description: {product.description}</ListGroup.Item>
=======
						<ListGroup.Item>
							Description: {product.description}
						</ListGroup.Item>
>>>>>>> 1b4af356f84080d4a9c8e84b376389a8fc18f27b:proshop/src/screens/ProductScreen.js
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
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
<<<<<<< HEAD:frontend/src/screens/ProductScreen.js
										{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
=======
										{product.countInStock > 0
											? "In Stock"
											: "Out of Stock"}
>>>>>>> 1b4af356f84080d4a9c8e84b376389a8fc18f27b:proshop/src/screens/ProductScreen.js
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
								>
									ADD TO CART
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};



export default ProductScreen;
