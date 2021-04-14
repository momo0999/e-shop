import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/shop' exact>
            <ShopScreen />
          </Route>
          <Route path='/shop/product/:id' component={ProductScreen} />
          <Route path='/' exact>
            <HomeScreen />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
