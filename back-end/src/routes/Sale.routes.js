const { Router } = require('express');

const SaleController = require('../controller/Sale.controller');
const token = require('../middlewares/token');

const route = Router();

route.post('/insert', token.verifyToken, SaleController.insertSale);

module.exports = route;