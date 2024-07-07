const { throwError } = require('./throwError');

class Validate {
  checkEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throwError(400, 'INVALID_EMAIL_FORMAT');
    }
  }

  checkPassword(password) {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      throwError(400, 'INVALID_PASSWORD_FORMAT');
    }
  }

  checkPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 11) {
      throwError(400, 'INVALID_PHONE_NUMBER_FORMAT');
    }
  }

  checkNickname(nickname) {
    if (
      typeof nickname !== 'string' ||
      nickname.length < 2 ||
      nickname.length > 20
    ) {
      throwError(400, 'INVALID_NICKNAME_FORMAT');
    }
  }
}

module.exports = { Validate };
