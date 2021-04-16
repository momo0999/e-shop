import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducers';
import { cartReducer } from './cartReducers';
import { userLoginReducer } from './userReducers';

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});
