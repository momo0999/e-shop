import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import ShopScreen from './screens/ShopScreen';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className='py-3'>
        <Container>
          <ShopScreen />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
