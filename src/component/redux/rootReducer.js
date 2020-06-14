import { combineReducers } from 'redux'
import categoryFilterReducer from './category/categoryReducer' ;   // reducer file 1
import cartManipulation from './cart/cartReducer'; // reducer file 2


const rootReducer = combineReducers({
  category: categoryFilterReducer,
  cart:cartManipulation
})
export default rootReducer