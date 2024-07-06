class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const throwError = (status, message) => {
  throw new CustomError(status, message);
};

module.exports = { throwError };
