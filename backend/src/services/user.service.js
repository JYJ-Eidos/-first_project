const { throwError } = require('../utils/throwError');

class UserService {
  userDao;
  constructor(userDao) {
    this.userDao = userDao;
  }

  async checkDuplicateEmail(column, value) {
    this.validateEmail(value);
    await this.checkDuplicate(column, value);
  }

  async checkDuplicate(column, value) {
    await this.userDao.checkDuplicate(column, value);
  }

  async createUser(userData) {
    const { email, password, nickname, phone_number, profile_image } = userData;
    await this.checkDuplicateEmail('email', email);
    this.validatePassword(password);
    await this.checkDuplicate('nickname', nickname);
    await this.checkDuplicate('phone_number', phone_number);
    await this.userDao.createUser(userData);
  }

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throwError(400, 'INVALID_EMAIL_FORMAT');
    }
  }

  validatePassword(password) {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      throwError(400, 'INVALID_PASSWORD_FORMAT');
    }
  }
}

module.exports = { UserService };
