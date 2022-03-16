import React, { useEffect } from 'react'
import { Link, useParams, useLocation, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CardScreen = () => {
	const { id } = useParams()
	const history = useHistory()
	const location = useLocation()

	const qty = location.search ? +location.search.split('=')[1] : 1

	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	console.log(cartItems)

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty))
		}
	}, [dispatch, id, qty])

	return <div>CardScreen</div>
}

export default CardScreen
