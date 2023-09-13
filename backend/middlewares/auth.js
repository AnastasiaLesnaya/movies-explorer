const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../errors/Unauthorized');
const { REQUIRE_AUTHORIZATION_MESSAGE } = require('../utils/constants');
const { JWT_SECRET_DEV } = require('../utils/config');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new UnauthorizedError(REQUIRE_AUTHORIZATION_MESSAGE);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV,
    );
  } catch (err) {
    next(new UnauthorizedError(REQUIRE_AUTHORIZATION_MESSAGE));
    return;
  }
  req.user = payload;

  next();
};
