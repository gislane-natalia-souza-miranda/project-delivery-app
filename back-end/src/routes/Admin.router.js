const { Router } = require('express');

const adminController = require('../controller/Admin.controller');

const route = Router();

route.post('/', adminController.createUser);

module.exports = route;