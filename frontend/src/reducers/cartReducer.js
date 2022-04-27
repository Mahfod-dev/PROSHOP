import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from '../constant/cardConstant'

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEMS:
			const item = action.payload
			const existItem = state.cartItems.find((x) => x.product === item.product)

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				}
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				}
			}

		case CART_REMOVE_ITEMS:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => {
					console.log(x, x.porduct)
					return x.product !== action.payload
				}),
			}

		default:
			return state
	}
}
