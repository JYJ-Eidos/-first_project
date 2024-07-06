const express = require('express');
const routes = express.Router();
const { userRouter } = require('./user.route');

routes.use('/users', userRouter);

module.exports = { routes };
