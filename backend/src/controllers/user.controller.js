class UserController {
  userService;
  constructor(userService) {
    this.userService = userService;
  }

  async checkDuplicateEmail(req, res) {
    const { email } = req.body;
    try {
      await this.userService.checkDuplicateEmail('email', email);
      res.status(200).json({ success: true, message: 'Email is available' });
    } catch (err) {
      res.status(err.status).json({ success: false, message: err.message });
    }
  }

  async signup(req, res) {
    const { email, password, nickname, phone_number, profile_image } = req.body;

    if (!email || !password || !nickname || !phone_number) {
      return res
        .status(400)
        .json({ success: false, message: 'MISSING_REQUIRED_FIELDS' });
    }

    try {
      await this.userService.createUser({
        email,
        password,
        nickname,
        phone_number,
        profile_image,
      });
      res.status(201).json({ success: true, message: 'SUCCESS_SIGNUP' });
    } catch (err) {
      res.status(err.status).json({ success: false, message: err.message });
    }
  }
}

module.exports = { UserController };
