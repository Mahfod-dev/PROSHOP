import {
<<<<<<< HEAD
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
} from '../constants/productConstants'
=======
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
} from '../constant/productConstant'
>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, ...state }
<<<<<<< HEAD
=======

>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload }
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}
export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
<<<<<<< HEAD
			return { loading: true, products: [] }
=======
			return { loading: true, product: {} }

>>>>>>> 3ece9f46a0a00e6a7b03af0c20cda343aad05228
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload }
		case PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}
