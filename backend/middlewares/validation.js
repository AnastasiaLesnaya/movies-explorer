const { Joi, celebrate } = require('celebrate');

// Регулярное выражение (ссылки)
const { REGEX } = require('../utils/constants');

// Валидация (регистрация)
const registerUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  }),
});

// Валидация (авторизация)
const authorizeUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  }),
});

// Валидация (данные пользователя)
const updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
  }),
});

// Валидация (карточки фильмов)
const addMovieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(REGEX),
    trailerLink: Joi.string().required().regex(REGEX),
    thumbnail: Joi.string().required().regex(REGEX),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

// Валидатор для проверки данных чтобы удалить фильм из сохранённых
const deleteMovieByIdValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});

const getUserInfoValidator = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});

module.exports = {
  authorizeUserValidator,
  registerUserValidator,
  addMovieValidator,
  deleteMovieByIdValidator,
  getUserInfoValidator,
  updateUserInfoValidator,
};
