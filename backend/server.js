const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/shop', (req, res) => {
  res.json(products);
});

app.get('/shop/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log('Server is running on port 5000...'));
