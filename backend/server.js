const express = require('express');
const path = require('path');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

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
