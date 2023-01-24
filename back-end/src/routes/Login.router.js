const express = require('express');
const LoginController = require('../controller/Login.controller');

const router = express.Router();

router.post('/', LoginController.login)

module.exports = router;