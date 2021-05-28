import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Col, Row } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  deleteProduct,
  fetchProductsList,
  createProduct,
} from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../actions/types';
import Paginate from '../components/Paginate';

const UserListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const { products, page, pages, loading, error } = useSelector(
    (state) => state.productList
  );
  const {
    success: successDelete,
    error: errorDelete,
    loading: loadingDelete,
  } = useSelector((state) => state.productDelete);

  const {
    success: successCreate,
    error: errorCreate,
    loading: loadingCreate,
    product: createdProduct,
  } = useSelector((state) => state.productCreate);

  const { success: successUpdate } = useSelector(
    (state) => state.productUpdate
  );

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
      dispatch({ type: PRODUCT_CREATE_RESET });
    } else {
      dispatch(fetchProductsList('', pageNumber));
    }
  }, [
    userInfo,
    dispatch,
    history,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  useEffect(() => {
    if (successUpdate) {
      dispatch(fetchProductsList());
    }
  }, [successUpdate, dispatch]);

  const handleCreateProduct = () => {
    dispatch(createProduct());
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <React.Fragment>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button onClick={handleCreateProduct} className='my-3'>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => handleDelete(product._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Paginate page={page} pages={pages} isAdmin={true} />
    </React.Fragment>
  );
};

export default UserListScreen;
