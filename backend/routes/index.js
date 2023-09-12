const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');

const auth = require('../middlewares/auth');

const { registerUser, authorizeUser } = require('../controllers/users');
const {
  authorizeUserValidator,
  registerUserValidator,
} = require('../middlewares/validation');

const { pageNotFound } = require('../utils/not_found');

// Регистрация, авторизация (+валидация)
router.post('/signup', registerUserValidator, registerUser);
router.post('/signin', authorizeUserValidator, authorizeUser);
// Страницы для авторизованных пользователей
router.use(auth);

// Роуты
router.use('/', userRouter);
router.use('/', movieRouter);

// Несуществующие страницы
router.use('*', pageNotFound);

module.exports = router;
