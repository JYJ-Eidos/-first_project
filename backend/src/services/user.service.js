const { throwError } = require('../utils/throwError');

class UserService {
  userDao;
  constructor(userDao) {
    this.userDao = userDao;
  }

  async checkDuplicateEmail() {
    this.validateEmail(email);
    await this.userDao.checkDuplicateEmail(email);
  }

  async createUser(userData) {
    const { email, password, nickname, phone_number, profile_image } = userData;
    this.validatePassword(password);
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
