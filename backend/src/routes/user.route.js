const express = require('express');
const userRouter = express.Router();
const { UserDao } = require('../models/user.dao');
const { Validate } = require('../utils/validate');
const { Bcrypt } = require('../utils/bcrypt');
const { UserService } = require('../services/user.service');
const { UserController } = require('../controllers/user.controller');
const { JWT } = require('../utils/jwt');
const userDao = new UserDao();
const validate = new Validate();
const bcrypt = new Bcrypt();
const jwt = new JWT();
const userService = new UserService(userDao, validate, bcrypt, jwt);
const userController = new UserController(userService);

userRouter.post('/signup', (req, res) => userController.signup(req, res));
userRouter.post('/login', (req, res) => userController.login(req, res));
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
