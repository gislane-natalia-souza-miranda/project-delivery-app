const express = require('express');
const cors = require('cors');
const registerRoutes = require('../routes/RegisterRoutes');
const ErrorHandler = require('../routes/ErrorHandler');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/register', registerRoutes);

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use(ErrorHandler.handle);

module.exports = app;
