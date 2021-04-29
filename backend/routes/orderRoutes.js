const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {
  addOrderItems,
  getOrderById,
  updateOrderToPay,
  getMyOrders,
} = require('../controllers/orderController');

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPay);

module.exports = router;
