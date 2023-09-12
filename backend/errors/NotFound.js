const { NOT_FOUND_CODE } = require('../utils/constants');

module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND_CODE;
  }
};
