const { AppDataSource } = require('./dataSource');
const { throwError } = require('../utils/throwError');

class UserDao {
  async createUser(user) {
    const columns = Object.keys(user).join(',');
    const placeholders = Object.keys(user)
      .map(() => '?')
      .join(',');
    const values = Object.values(user);

    try {
      await AppDataSource.query(
        `
        INSERT INTO users
        (${columns})
        VALUES
        (${placeholders})
        `,
        values
      );
    } catch (err) {
      console.error(err);
      throwError(500, 'SERVER_ERROR');
    }
  }

  async checkDuplicate(column, value) {
    const validColumns = ['email', 'nickname', 'phone_number'];
    if (!validColumns.includes(column)) {
      throwError(400, 'INVALID_COLUMN');
    }

    const [result] = await AppDataSource.query(
      `
        SELECT 1 FROM users
        WHERE ?? = ? LIMIT 1
        `,
      [column, value]
    );

    if (result) {
      throwError(400, `DUPLICATE_${column.toUpperCase()}`);
    }
  }

  async getUserByEmail(email) {
    const [user] = await AppDataSource.query(
      `
      SELECT password FROM users
      WHERE email = ?
      `,
      [email]
    );

    if (!user) {
      throwError(404, 'USER_NOT_FOUND');
    }

    return user;
  }
}

module.exports = { UserDao };
