const { Router } = require('express');

const registerController = require('../controller/RegisterController');

const route = Router();

route.post('/', registerController.signUp);

route.post('/admin', registerController.signUp);

module.exports = route;