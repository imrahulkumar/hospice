import { combineReducers } from 'redux'
import categoryFilterReducer from './category/categoryReducer' ;   // reducer file 1


const rootReducer = combineReducers({
  category: categoryFilterReducer
})
export default rootReducer