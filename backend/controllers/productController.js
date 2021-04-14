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

module.exports = { getProducts };
