import { ADD_TO_CART, DELETE_FROM_CART } from './cartType';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const DeleteFromCart = (product) => {
    return {
        type: DELETE_FROM_CART,
        payload: product
    }
}