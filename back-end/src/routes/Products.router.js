const express = require('express');
const { getAll } = require('../controller/Product.controller');
const token = require('../middlewares/token');

const router = express.Router();

router.get('/products', token.verifyToken, getAll);

module.exports = router;