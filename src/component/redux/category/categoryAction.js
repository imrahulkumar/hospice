import { CATEGORY_CHANGED } from './categoryType';
import {totalProductList} from '../../../utils/utility.ts'
export const categoryChanged = (categoryType = 'all') =>{
    return {
        type: CATEGORY_CHANGED,
        payload: filteringDataFromCategory(categoryType)
           }
      }

 let filteringDataFromCategory=(categoryType)=> totalProductList.filter(r => r.category_id == categoryType.id);
