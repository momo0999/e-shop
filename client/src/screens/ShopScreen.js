import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../actions/productActions';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';

const ShopScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const { products, pages, page, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(fetchProductsList(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <React.Fragment>
      {!keyword && <ProductCarousel />}
      <h1>LATEST PRODUCTS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
      <Paginate page={page} pages={pages} keyword={keyword ? keyword : ''} />
    </React.Fragment>
  );
};

export default ShopScreen;
