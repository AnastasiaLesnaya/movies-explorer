const userRouter = require('express').Router();

// Переменные действий с пользователем
const { getUserInfo, updateUserInfo } = require('../controllers/users');

// Валидация
const {
  getUserInfoValidator,
  updateUserInfoValidator,
} = require('../middlewares/validation');

userRouter.get('/users/me', getUserInfoValidator, getUserInfo);

userRouter.patch('/users/me', updateUserInfoValidator, updateUserInfo);

module.exports = userRouter;
