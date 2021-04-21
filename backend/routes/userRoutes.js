const express = require('express');
const router = express.Router();

const {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/login').post(loginUser);
router.route('/').post(registerUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);

module.exports = router;
