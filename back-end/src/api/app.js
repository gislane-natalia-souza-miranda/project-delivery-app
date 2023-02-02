require('express-async-errors');
const express = require('express');
const cors = require('cors');
const httpErrorMiddleware = require('../middlewares/error.middleware');
const LoginRoutes = require('../routes/Login.router');
const registerRoutes = require('../routes/RegisterRoutes');
const ProductRoutes = require('../routes/Products.router');
const SaleRoutes = require('../routes/Sale.routes');
const UserRoutes = require('../routes/User.routes');
const AdminRoutes = require('../routes/Admin.router');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/images', express.static('public'));

app.use('/login', LoginRoutes);
app.use('/register', registerRoutes);
app.use('/customer', ProductRoutes);
app.use('/orders', SaleRoutes);
app.use('/seller', SaleRoutes);
app.use('/users', UserRoutes);
app.use('/admin', AdminRoutes);

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use(httpErrorMiddleware);

module.exports = app;
