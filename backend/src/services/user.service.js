const bcrypt = require('bcrypt');
const { throwError } = require('../utils/throwError');
const { Validate } = require('../utils/validate');

class UserService {
  constructor(userDao) {
    this.userDao = userDao;
    this.validate = new Validate();
  }

  async checkDuplicate(column, value) {
    await this.userDao.checkDuplicate(column, value);
  }

  async createUser(userData) {
    const { email, password, nickname, phone_number, profile_image } = userData;

    this.validate.checkEmail(email);
    this.validate.checkPassword(password);
    this.validate.checkNickname(nickname);
    this.validate.checkPhoneNumber(phone_number);

    await this.checkDuplicate('email', email);
    await this.checkDuplicate('nickname', nickname);
    await this.checkDuplicate('phone_number', phone_number);

    const hashedPassword = await this.bcryptHashPassword(password);

    const newUserData = {
      email,
      password: hashedPassword,
      nickname,
      phone_number,
      profile_image,
    };

    await this.userDao.createUser(newUserData);
  }

  async bcryptHashPassword(password) {
    const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS);
    try {
      return await bcrypt.hash(password, SALT_ROUNDS || 10);
    } catch (err) {
      throwError(400, 'PASSWORD_HASHING_FAILED');
    }
  }
}

module.exports = { UserService };
