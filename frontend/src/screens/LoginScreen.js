import { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/usersAction'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const history = useHistory()

	const userLogin = useSelector((state) => state.userLogin)
	console.log(userLogin)

	const { loading, error, userInfo } = userLogin

	useEffect(() => {
		if (userInfo) {
			history.push('/')
		}
	}, [dispatch, history, userInfo])

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(login({ email, password }))
	}
	return (
		<FormContainer>
			<h1>Sign in</h1>
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='email'>
					<Form.Label>Email Adress</Form.Label>
					<Form.Control
						type='text'
						placeholder='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Label>password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Sign in
				</Button>
			</Form>
			<Row>
				<Col className='py-3'>
					New Customer ?<br />
					<Link to={Redirect ? `/register?redirect=${Redirect}` : `/register`}>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}
export default LoginScreen
