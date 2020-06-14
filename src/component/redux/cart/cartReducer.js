//cakeReducer.js
import { ADD_TO_CART, DELETE_FROM_CART } from './cartType';

const initialState = {
  product: []
}

const cartManipulation = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: return {
      ...state,
      product:[ ...state.product, action.payload]
    }

    default: return state
  }
}

export default cartManipulation