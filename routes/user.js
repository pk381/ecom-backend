const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get('/sign-up', userController.getSignUp);

module.exports = router;