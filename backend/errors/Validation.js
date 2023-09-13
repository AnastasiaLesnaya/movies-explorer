const { BAD_REQUEST_CODE } = require('../utils/constants');

module.exports = class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQUEST_CODE;
  }
};
