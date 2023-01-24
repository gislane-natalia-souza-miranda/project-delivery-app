const { Router } = require('express');
const RegisterController = require('../controller/RegisterController');
const route = Router();

const register = new RegisterController();

route.post('/', register.signUp);

module.exports = route;