require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcrypt');
const { throwError } = require('./throwError');

class Bcrypt {
  async hashPassword(password) {
    if (typeof password !== 'string' || password.length === 0) {
      throwError(400, 'INVALID_PASSWORD');
    }

    const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
    try {
      return await bcrypt.hash(password, SALT_ROUNDS);
    } catch (err) {
      throwError(500, 'PASSWORD_HASHING_FAILED');
    }
  }

  async verifyPassword(password, hashedPassword) {
    if (typeof password !== 'string' || typeof hashedPassword !== 'string') {
      throwError(400, 'INVALID_INPUT');
    }

    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (err) {
      throwError(400, 'PASSWORD_VERIFICATION_FAILED');
    }
  }
}

module.exports = { Bcrypt };
