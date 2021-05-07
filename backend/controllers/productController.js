const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc fetch all products
// @route get /api/products
// @access public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error('No products found');
  }
});

// @desc get a product by id
// @route get /api/products/:id
// @access public admin

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    throw new Error('Product not found');
  }
});

// @desc delete a product
// @route delete /api/products/:id
// @access private admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

module.exports = { getProducts, getProductById, deleteProduct };
