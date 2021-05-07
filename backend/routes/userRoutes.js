const express = require('express');
const router = express.Router();

const {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  updateUser,
  getUserById,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/login').post(loginUser);
router.route('/').post(registerUser).get(protect, admin, getAllUsers);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

module.exports = router;
