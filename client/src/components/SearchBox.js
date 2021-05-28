import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/shop');
    }
  };
  return (
    <Form onSubmit={handleOnSubmit} inline>
      <Form.Control
        className='mr-sm-2 ml-sm-5'
        name='q'
        placeholder='Search Products...'
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button type='submit' className='p-2' variant='outline-success'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
