const express = require('express');
const router = express.Router();

const {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/login').post(loginUser);
router.route('/').post(registerUser).get(protect, admin, getAllUsers);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);

module.exports = router;
