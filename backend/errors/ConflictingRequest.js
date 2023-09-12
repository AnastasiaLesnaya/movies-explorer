const { NOT_UNIQUE_CODE } = require('../utils/constants');

module.exports = class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_UNIQUE_CODE;
  }
};
