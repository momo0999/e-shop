import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProudctEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/search/:keyword' component={ShopScreen} />
          <Route path='/admin/orderList' component={OrderListScreen} />
          <Route path='/admin/productList' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/userList' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shop' exact component={ShopScreen} />
          <Route path='/shop/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
