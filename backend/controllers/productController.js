const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc fetch all products
// @route get /api/products
// @access public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

module.exports = { getProducts };
