import { combineReducers } from 'redux';
import { productListReducer, productDetailReducer } from './productReducers';
import { cartReducer } from './cartReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from './userReducers';

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});
