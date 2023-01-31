const { Router } = require('express');

const SaleController = require('../controller/Sale.controller');
const token = require('../middlewares/token');

const route = Router();

route.post('/insert', token.verifyToken, SaleController.insertSale);
// rever rota 
route.get('/customer', SaleController.getAll);

route.get('/orders/:id', SaleController.getSalesById);

route.get('/:id', SaleController.getById);

route.patch('/orders/:id', SaleController.update);

module.exports = route;