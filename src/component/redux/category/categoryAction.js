import { CATEGORY_CHANGED } from './categoryType';
import {totalProductList} from '../../../utils/utility.ts'
export const categoryChanged = (categoryType = 'all') =>{
    return {
        type: CATEGORY_CHANGED,
        payload: filteringDataFromCategory(categoryType)
           }
      }

 let filteringDataFromCategory=(categoryType)=>{
     let categoryList = [];
    if(categoryType.id == 101 && categoryType.name == "Sanitizer"){
     return   categoryList =  totalProductList.filter(r => r.category_id ==categoryType.id )
    }
 }