import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating';

const Product = ({
  product: { _id, image, name, rating, numReviews, price },
}) => {
  return (
    <Card className='my-3 p-3 rounded product'>
      <Link to={`/shop/product/${_id}`}>
        <Card.Img src={image} variant='top' className='product__img' />
      </Link>
      <Card.Body>
        <Link to={`/shop/product/${_id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='div'>
        <div>
          <Rating value={rating} text={`${numReviews} Reviews`} />
        </div>
      </Card.Text>

      <Card.Text as='h3'>${price}</Card.Text>
    </Card>
  );
};

export default Product;
