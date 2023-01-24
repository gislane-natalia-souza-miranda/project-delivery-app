require('express-async-errors')
const express = require('express');
const cors = require('cors')
const httpErrorMiddleware = require('../middlewares/error.middleware');
const LoginRoutes = require('../routes/Login.router');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', LoginRoutes);

app.use(httpErrorMiddleware)

module.exports = app;
