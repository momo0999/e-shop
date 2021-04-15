const express = require('express');
const router = express.Router();

const { loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/login').post(loginUser);

router.route('/profile').get(protect, getUserProfile);

module.exports = router;
