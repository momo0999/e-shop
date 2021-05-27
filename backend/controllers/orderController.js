const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

// @route /api/orders
// @desc orders list
// @access private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(404);
    throw new Error('No orders found');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      shippingPrice,
      taxPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('No order found');
  }
});

// @route /api/orders/:id/pay
// @desc update order to pay
// @access private

const updateOrderToPay = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @route /api/orders/:id/deliver
// @desc update order to deliver
// @access Private

const updateOrderToDeliver = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('No order found');
  }
});

// @route /api/orders/myorders
// @desc Get my orders
// @access Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  if (!orders || orders.length === 0) {
    res.status(404);
    throw new Error('No orders found');
  } else if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Something went wrong please refresh the page');
  }
});

// @route /api/orders
// @desc Get all orders admin
// @access Private

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('No orders found');
  }
});

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPay,
  getMyOrders,
  getOrders,
  updateOrderToDeliver,
};
