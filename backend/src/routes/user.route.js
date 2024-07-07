const express = require('express');
const userRouter = express.Router();
const { UserDao } = require('../models/user.dao');
const { Validate } = require('../utils/validate');
const { Bcrypt } = require('../utils/bcrypt');
const { UserService } = require('../services/user.service');
const { UserController } = require('../controllers/user.controller');
const userDao = new UserDao();
const validate = new Validate();
const bcrypt = new Bcrypt();
const userService = new UserService(userDao, validate, bcrypt);
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
