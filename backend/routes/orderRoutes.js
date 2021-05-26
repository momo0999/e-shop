const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');

const {
  addOrderItems,
  getOrderById,
  updateOrderToPay,
  getMyOrders,
  getOrders,
} = require('../controllers/orderController');

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPay);

module.exports = router;
