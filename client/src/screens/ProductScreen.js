import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Form,
} from 'react-bootstrap';

import {
  fetchProductDetail,
  createProductReview,
} from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../actions/types';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import MetaHelmet from '../components/MetaHelmet';

const ProductScreen = ({ match, history }) => {
  const productId = match.params.id;
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );

  const {
    loading: loadingReview,
    success: successReview,
    error: errorReview,
  } = useSelector((state) => state.productCreateReview);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (successReview) {
      dispatch(fetchProductDetail(productId));
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    if (!product._id || product._id !== productId)
      dispatch(fetchProductDetail(productId));
  }, [productId, dispatch, product, successReview]);

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductReview(productId, { rating, comment }));
  };

  if (!product) {
    return;
  }
  return (
    <React.Fragment>
      <Link className='btn btn-light my-3' to='/shop'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <React.Fragment>
          <MetaHelmet title={product.name} />
          <Row>
            <Col md={6}>
              <Image fluid src={product.image} alt={product.name} />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            className='qty__dark'
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (count) => {
                                return (
                                  <option key={count + 1} value={count + 1}>
                                    {count + 1}
                                  </option>
                                );
                              }
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      onClick={addToCart}
                      className='btn-block'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row>
            {product._id && (
              <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && <Message>No Reviews</Message>}
                <ListGroup variant='flush'>
                  {product.reviews.map((review) => {
                    return (
                      <ListGroup.Item key={review._id}>
                        <strong>{review.name}</strong>
                        <Rating value={review.rating} />
                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.comment}</p>
                      </ListGroup.Item>
                    );
                  })}
                  <ListGroup.Item>
                    <h2>Write a Customer Review</h2>
                    {errorReview && (
                      <Message variant='danger'>{errorReview}</Message>
                    )}
                    {userInfo ? (
                      <Form onSubmit={handleReviewSubmit}>
                        <Form.Group controlId='rating'>
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            as='select'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value=''>Select...</option>
                            <option value='1'>1 - Poor</option>
                            <option value='2'>2 - Ok</option>
                            <option value='3'>3 - Good</option>
                            <option value='4'>4 - Very Good</option>
                            <option value='5'>5 - Excellent</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='comment'>
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                            as='textarea'
                            row='3'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Comment...'
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          disabled={loadingReview}
                          type='submit'
                          variant='primary'
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <Message>
                        Please <Link to='/login'>sign in</Link> to write a
                        review
                      </Message>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            )}
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductScreen;
