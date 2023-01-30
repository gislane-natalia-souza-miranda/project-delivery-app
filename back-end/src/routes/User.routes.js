const { Router } = require('express');

const UserController = require('../controller/User.controller');

const route = Router();

route.get('/sellers', UserController.getSellers);

module.exports = route;