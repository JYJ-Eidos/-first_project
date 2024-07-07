require('dotenv').config({ path: '../../.env' });
const jwt = require('jsonwebtoken');

class JWT {
  issuedToken(data) {
    const SECRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign(data, SECRET_KEY);
    return token;
  }
}

module.exports = { JWT };
