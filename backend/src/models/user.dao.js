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
    try {
      const [user] = await AppDataSource.query(
        `
        SELECT * FROM users
        WHERE ${column} = ?
        `,
        [value]
      );

      if (user) {
        throwError(400, `DUPLICATE_${value.toUpperCase()}`);
      }
    } catch (err) {
      throwError(500, 'SERVER_ERROR');
    }
  }
}

module.exports = { UserDao };
