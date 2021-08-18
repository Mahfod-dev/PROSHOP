import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
	const { id } = useParams();

	// const product = products.filter((product) => product._id === match.params.id);

	return (
		<>
			<Link to="/" className="btn btn-light my-3">
				Go back
			</Link>
			<Row>
				<Col md={6}>
					<Image
						src={products[id - 1].image}
						alt={products[id - 1].name}
						fluid
					/>
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{products[id - 1].name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={products[id - 1].rating}
								text={`${products[id - 1].numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price:${products[id - 1].price}</ListGroup.Item>
						<ListGroup.Item>
							Description: {products[id - 1].description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${products[id - 1].price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										{products[id - 1].countInStock > 0
											? "In Stock"
											: "Out of Stock"}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={products[id - 1].countInStock === 0}
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
