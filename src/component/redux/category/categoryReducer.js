import { CATEGORY_CHANGED } from  './categoryType'
import {totalProductList} from '../../../utils/utility.ts'
const initialState = {
  product: totalProductList
}

const categoryFilterReducer = (state = initialState, action) => {
  console.log("-------",action)
  switch (action.type) {
    case CATEGORY_CHANGED: return {
      ...state,
      product: action.payload
    }

    default: return state
  }
 
}



export default categoryFilterReducer