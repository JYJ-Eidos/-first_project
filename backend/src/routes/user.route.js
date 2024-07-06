const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../controllers/user.controller');
const { UserDao } = require('../models/user.dao');
const { UserService } = require('../services/user.service');
const userDao = new UserDao();
const userService = new UserService(userDao);
const userController = new UserController(userService);

userRouter.post('/signup', (req, res) => userController.signup(req, res));
userRouter.post('/email-check', (req, res) =>
  userController.checkDuplicateEmail(req, res)
);
userRouter.post('/nickname-check', (req, res) =>
  userController.checkDuplicateNickname(req, res)
);
userRouter.post('/phone-number-check', (req, res) =>
  userController.checkDuplicatePhoneNumber(req, res)
);

module.exports = { userRouter };
