const Movie = require('../models/movie');

// 400
const ValidationError = require('../errors/Validation');

// 403
const ForbiddenError = require('../errors/Forbidden');

// 404
const NotFoundError = require('../errors/NotFound');

const {
  NOT_FOUND_MOVIE_MESSAGE,
  BAD_REQUEST_MOVIE_MESSAGE,
  FORBIDDEN_MESSAGE,
} = require('../utils/constants');

// Получаем карточки фильмов
const getUserMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

// Создаём новые карточки
const addMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(
          new ValidationError(
            BAD_REQUEST_MOVIE_MESSAGE,
          ),
        );
      } else {
        next(e);
      }
    });
};

// удаляем карточку
const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFoundError(NOT_FOUND_MOVIE_MESSAGE);
    })
    .then((movie) => {
      const owner = movie.owner.toString();

      if (req.user._id === owner) {
        Movie.deleteOne(movie)
          .then(() => {
            res.send(movie);
          })
          .catch(next);
      } else {
        throw new ForbiddenError(FORBIDDEN_MESSAGE);
      }
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(
          new ValidationError(
            BAD_REQUEST_MOVIE_MESSAGE,
          ),
        );
      } else {
        next(e);
      }
    });
};

module.exports = {
  getUserMovies,
  addMovie,
  deleteMovieById,
};
