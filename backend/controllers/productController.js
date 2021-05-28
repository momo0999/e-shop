const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc fetch all products
// @route get /api/products
// @access public

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (products) {
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

// @desc Create new product
// @route /api/products
// @access Private Admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update a product
// @route /api/products/:id
// @access Private Admin

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    numReviews,
    description,
  } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.numReviews = numReviews;
    product.description = description;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc  Create a new review
// @route /api/products/:id/reviews
// @access Private

const createNewReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewd = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewd) {
      res.status(400);
      throw new Error('Product already reviewed');
    } else {
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => acc + item.rating, 0) /
        product.reviews.length;
      await product.save();
      res.status(201).json({ message: 'Review added' });
    }
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Get top products
// @route /api/products/top
// @access Public

const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error('Products not found');
  }
});

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createNewReview,
  getTopProducts,
};
