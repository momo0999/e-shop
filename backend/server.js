const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const products = require('./data/products');

dotenv.config();

const app = express();

const startServer = () => {
  connectDB()
    .then(() =>
      app.listen(PORT, () =>
        console.log(
          `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
            .yellow.bold
        )
      )
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
startServer();
