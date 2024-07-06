const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user.controller');
const { UserDao } = require('../models/user.dao');
const { UserService } = require('../services/user.service');
const userDao = new UserDao();
const userService = new UserService(userDao);
const userController = new UserController(userService);

userRouter.post('/signup', (req, res) => userController.signup(req, res));

module.exports = { userRouter };
