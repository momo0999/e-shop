import React, { useEffect } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import MetaHelmet from '../components/MetaHelmet';
import Product from '../components/Product';
import { images } from '../homeScreenImages';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { products, error, loading } = useSelector(
    (state) => state.topProducts
  );

  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]);
  return (
    <React.Fragment>
      <MetaHelmet />
      <Carousel className='carousel__homeScreen'>
        {images.map((image, index) => {
          return (
            <Carousel.Item interval={2000} pause='hover' key={index}>
              <img
                className='d-block w-100'
                src={image.imgUrl}
                alt={image.title}
              />
              <Carousel.Caption className='carousel__caption-homeScreen'>
                <h3>{image.title}</h3>
                <p>{image.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className='section'>
        <Row className='justify-content-md-center'>
          <h1>OUR TOP PRODUCTS</h1>
        </Row>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        {products && (
          <Row className='justify-content-md-center'>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>

      <Row className='justify-content-md-center'>
        <h1>Why Choosing Us:</h1>
      </Row>
      <div className='flex__row'>
        <div className='flex__row-col'>
          <i className='fas fa-recycle fa-4x'></i>
          <h4>Environmentally Friendly</h4>
          <p>
            All our products are environmentally friendly and can be recycled.
          </p>
        </div>

        <div className='flex__row-col'>
          <i className='fas fa-palette fa-4x'></i>
          <h4>Choose Your Design</h4>
          <p>
            We can design your cup as you wish or you send us your own design.
          </p>
        </div>
        <div className='flex__row-col'>
          <i className='fas fa-shipping-fast fa-4x'></i>
          <h4>We Deliver Fast</h4>
          <p>
            We can deliver in three dayes whether you orderd 1 cup or 100 cups.
          </p>
        </div>
      </div>

      <div className='contact-us'>
        <p>Have a question?</p>
        <h1>Get In Touch</h1>
        <p>
          Please don't hesitate to contact us if you have any questions, write
          us an email and we will do our best to get back to you as soon as
          posible!
        </p>
        <a
          className='btn btn-light my-3 btn-contact'
          href='mailto:mugshop@example.com'
        >
          Contact Us
        </a>
      </div>
    </React.Fragment>
  );
};

export default HomeScreen;
