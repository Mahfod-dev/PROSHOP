import axios from 'axios'
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LOGOUT,
} from '../constants/usersConstants'

export const login =
	({ email, password }) =>
	async (dispatch) => {
		console.log(email, password)
		try {
			dispatch({ type: USER_LOGIN_REQUEST })

			// const config = {
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// }

			const { data } = await axios.post('/api/users/login', { email, password })

			console.log(data)

			dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

			localStorage.setItem('userInfo', JSON.stringify(data))
		} catch (error) {
			dispatch({
				type: USER_LOGIN_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			})
		}
	}
