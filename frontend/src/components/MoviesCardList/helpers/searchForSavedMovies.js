export const searchForSavedMovies = (savedFilms, card) => {
    return savedFilms.find((savedMovie) => savedMovie.movieId === card.id);
}