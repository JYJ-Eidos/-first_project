class UserController {
  userService;
  constructor(userService) {
    this.userService = userService;
  }

  async checkDuplicateEmail(req, res) {
    const { email } = req.body;
  }

  async signup(req, res) {
    const { email, password, nickname, phone_number, profile_image } = req.body;

    try {
      await this.userService.createUser({
        email,
        password,
        nickname,
        phone_number,
        profile_image,
      });
      res.status(201).json({ message: 'SUCCESS_SIGNUP' });
    } catch (err) {
      res.status(err.status).json({ message: err.message });
    }
  }
}

module.exports = { UserController };
