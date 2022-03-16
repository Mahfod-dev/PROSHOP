import React from "react";
import axios from 'axios'
import { useState,useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";


const HomeScreen = () => {

	const [products,setProducts] = useState([])


	useEffect(()=>{
		
		const fecthProducts = async()=>{
			const {data} = await axios.get('/api/products')

			setProducts(data)
		}
		fecthProducts()
	},[])


	const product = products.map((product) => {
		return (
			<Col key={product._id} sm={12} md={4} lg={2} xl={4}>
				<Product product={product} />
			</Col>
		);
	});

	return (
		<>
			<h1>Latest Products</h1>
			<Row>{product}</Row>
		</>
	);
};

export default HomeScreen;
