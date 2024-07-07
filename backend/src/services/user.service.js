class UserService {
  constructor(userDao, validate, bcrypt) {
    this.userDao = userDao;
    this.validate = validate;
    this.bcrypt = bcrypt;
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

    const hashedPassword = await this.bcrypt.hashPassword(password);

    const newUserData = {
      email,
      password: hashedPassword,
      nickname,
      phone_number,
      profile_image,
    };

    await this.userDao.createUser(newUserData);
  }
}

module.exports = { UserService };
