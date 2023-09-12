import * as movies from '../../../utils/MoviesApi'

export const querySearchHandler = (query, toggleShort, filmFilterHandler, setIsLoading, setError) => {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', toggleShort);

    if (localStorage.getItem('fetchedFilms')) {
        const movies = JSON.parse(localStorage.getItem('fetchedFilms'));
        filmFilterHandler(movies, query, toggleShort);
    } else {
        setIsLoading(true);
        movies
            .getMovies()
            .then((cardsData) => {
                filmFilterHandler(cardsData, query, toggleShort);
                setError(false);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
}