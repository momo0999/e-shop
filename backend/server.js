const express = require('express');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

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

const PORT = process.env.PORT || 5000;
startServer();

app.use(notFound);
app.use(errorHandler);
