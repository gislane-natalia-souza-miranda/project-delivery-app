const express = require('express');
const SaleController = require('../controller/Sale.controller');

const router = express.Router();

router.get('/orders/:id', SaleController.getSalesById);

module.exports = router;