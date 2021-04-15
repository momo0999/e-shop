import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducers';

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});
