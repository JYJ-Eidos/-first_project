const { throwError } = require('../utils/throwError');

class UserService {
  constructor(userDao, validate, bcrypt, jwt) {
    this.userDao = userDao;
    this.validate = validate;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  async checkDuplicate(column, value) {
    await this.userDao.checkDuplicate(column, value);
  }

  async registerUser(userSignUpData) {
    const { email, password, nickname, phone_number, profile_image } =
      userSignUpData;

    this.validate.checkEmail(email);
    this.validate.checkPassword(password);
    this.validate.checkNickname(nickname);
    this.validate.checkPhoneNumber(phone_number);

    await this.userDao.checkDuplicate('email', email);
    await this.userDao.checkDuplicate('nickname', nickname);
    await this.userDao.checkDuplicate('phone_number', phone_number);

    const hashedPassword = await this.bcrypt.hashPassword(password);

    const newUserSignUpData = {
      email,
      password: hashedPassword,
      nickname,
      phone_number,
      profile_image,
    };

    await this.userDao.createUser(newUserSignUpData);
  }

  async loginUser(userLoginData) {
    const { email, password } = userLoginData;

    this.validate.checkEmail(email);
    const userData = await this.userDao.getUserByEmail(email);
    const { id, password: hashedPassword } = userData;
    const isPasswordValid = await this.bcrypt.verifyPassword(
      password,
      hashedPassword
    );

    if (!isPasswordValid) {
      throwError(400, 'INVALID_PASSWORD');
    }

    const iss = process.env.ISSUER;
    const token = this.jwt.issuedToken({ id, email, iss });

    return token;
  }
}

module.exports = { UserService };
