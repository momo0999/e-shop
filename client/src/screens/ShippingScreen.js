import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  const [formValues, setFormValues] = useState({
    address: shippingAddress.address || '',
    city: shippingAddress.city || '',
    postalCode: shippingAddress.postalCode || '',
    country: shippingAddress.country || '',
  });
  const { address, city, postalCode, country } = formValues;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(formValues));
    history.push('/payment');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 className='mb-4'>Shipping</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            name='address'
            placeholder='Enter your address'
            value={address}
            required
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            name='city'
            placeholder='Enter your city'
            value={city}
            required
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            name='postalCode'
            placeholder='Enter your postal code'
            value={postalCode}
            required
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            name='country'
            placeholder='Enter your country'
            value={country}
            required
            onChange={handleOnChange}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
