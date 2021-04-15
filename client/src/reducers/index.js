import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducers';
import { cartReducer } from './cartReducers';

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});
