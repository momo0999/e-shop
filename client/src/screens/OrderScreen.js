import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';
import { Link } from 'react-router-dom';

const OrderScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.orderDetails);

  //Calculations
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  if (!loading) {
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!order || order._id !== match.params.id) {
      dispatch(getOrderDetails(match.params.id));
    }
  }, [dispatch, match, order]);

  if (!order) {
    return null;
  }

  return (
    <React.Fragment>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item className='mb-4'>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},
                {order.shippingAddress.posalCode},
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item className='mb-4'>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>

              {order.isPaid ? (
                <Message variant='success'>Paid at {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
          {order.orderItems.length === 0 ? (
            <Message>Order is empty</Message>
          ) : (
            <ListGroup variant='flush'>
              <h2>Order Items</h2>
              {order.orderItems.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} x {item.price} = {item.qty * item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={order.orderItems === 0}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default OrderScreen;
