const express = require('express');
const morgan = require('morgan');

// Initializations
const app = express();

// Routes
const usersRoutes = require('./routes/users.routes');

// format json
app.use(express.json());
// Data format form
app.use(express.urlencoded({ extended: false }));

//middlewares
app.use(morgan('dev'));

// routes
app.use('/api', usersRoutes);

module.exports = app;
