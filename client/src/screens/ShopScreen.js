import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../actions/productActions';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product';

const ShopScreen = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);

  if (!products) {
    return;
  }
  return (
    <React.Fragment>
      <h1>LATEST PRODUCTS</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default ShopScreen;
