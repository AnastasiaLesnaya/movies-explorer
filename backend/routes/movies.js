const movieRouter = require('express').Router();

// Переменные действий с карточками фильмов
const {
  getUserMovies,
  addMovie,
  deleteMovieById,
} = require('../controllers/movies');

// Валидация
const {
  addMovieValidator,
  deleteMovieByIdValidator,
} = require('../middlewares/validation');

movieRouter.get('/movies', getUserMovies);

movieRouter.post('/movies', addMovieValidator, addMovie);

movieRouter.delete(
  '/movies/:movieId',
  deleteMovieByIdValidator,
  deleteMovieById,
);

module.exports = movieRouter;
