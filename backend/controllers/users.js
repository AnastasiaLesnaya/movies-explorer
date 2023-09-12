const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// 400
const ValidationError = require('../errors/Validation');

// 404
const NotFoundError = require('../errors/NotFound');

// 409
const ConflictError = require('../errors/ConflictingRequest');

const { HTTP_CREATED_CODE_STATUS } = require('../utils/constants');
const {
  NOT_FOUND_USER_MESSAGE,
  BAD_REQUEST_USER_MESSAGE,
  NOT_UNIQUE_USER_MESSAGE,
} = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const { JWT_SECRET_DEV } = require('../utils/config');

// регистрирация
const registerUser = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then((user) => res.status(HTTP_CREATED_CODE_STATUS).send({
      email: user.email,
      name: user.name,
      _id: user._id,
    }))
    .catch((e) => {
      if (e.code === 11000) {
        next(new ConflictError(NOT_UNIQUE_USER_MESSAGE));
      } else if (e.name === 'ValidationError') {
        next(
          new ValidationError(
            BAD_REQUEST_USER_MESSAGE,
          ),
        );
      } else {
        next(e);
      }
    });
};

// обновляем профиль пользователя
const updateUserInfo = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { email, name },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError(NOT_FOUND_USER_MESSAGE);
    })
    .then((user) => {
      res.send(user);
    })
    .catch((e) => {
      if (e.code === 11000) {
        next(new ConflictError(NOT_UNIQUE_USER_MESSAGE));
      } else if (e.name === 'ValidationError') {
        next(
          new ValidationError(
            BAD_REQUEST_USER_MESSAGE,
          ),
        );
      } else {
        next(e);
      }
    });
};

// авторизация
const authorizeUser = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      // Создание JWT-токена
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV,
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(next);
};

// получение профиля
const getUserInfo = (req, res, next) => {
  const userId = req.user._id;
  User.findById(userId)
    .orFail(() => {
      throw new NotFoundError(NOT_FOUND_USER_MESSAGE);
    })
    .then((user) => {
      res.send(user);
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new ValidationError(BAD_REQUEST_USER_MESSAGE));
      } else {
        next(e);
      }
    });
};

module.exports = {
  authorizeUser,
  registerUser,
  getUserInfo,
  updateUserInfo,
};
