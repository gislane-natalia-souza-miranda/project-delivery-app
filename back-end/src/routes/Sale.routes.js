const { Router } = require('express');

const SaleController = require('../controller/Sale.controller');
const token = require('../middlewares/token');

const route = Router();

route.post('/insert', token.verifyToken, SaleController.insertSale);
// rever rota 
route.get('/customer', SaleController.getAll);

route.get('/:id', SaleController.getById);

module.exports = route;