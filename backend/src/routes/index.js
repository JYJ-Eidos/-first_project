const express = require('express');
const routes = express.Router();
const { userRouter } = require('./user.route');

routes.use('/user', userRouter);

module.exports = { routes };
