import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterDuration } from '../../utils/functions';
import Header from '../Header/Header';
import MoviesContext from '../../contexts/MoviesContext';

import { querySearchHandler, toggleShortFilmFilter } from './helpers';

function Movies({ isUserLoggedIn, handleLikeFilm, onDeleteCard, savedFilms }) {
	const [isLoading, setIsLoading] = useState(false);
	const [allMovies, setAllMovies] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [toggleShort, setToggleShort] = useState(false);
	const [error, setError] = useState(false);
	const [notFound, setNotFound] = useState(false);

	function filmFilterHandler(movies, query, short) {
		const moviesCardList = filterMovies(movies, query, short);
		setAllMovies(moviesCardList);
		setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList);
		localStorage.setItem('selectedFilms', JSON.stringify(moviesCardList));
		localStorage.setItem('fetchedFilms', JSON.stringify(movies));
	}

	useEffect(() => {
		if (localStorage.getItem('shortMovies') === 'true') {
			setToggleShort(true);
		} else {
			setToggleShort(false);
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('selectedFilms')) {
			const movies = JSON.parse(localStorage.getItem('selectedFilms'));
			setAllMovies(movies);
			if (localStorage.getItem('shortMovies') === 'true') {
				setFilteredMovies(filterDuration(movies));
			} else {
				setFilteredMovies(movies);
			}
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('movieSearch')) {
			if (filteredMovies.length === 0) {
				setNotFound(true);
			} else {
				setNotFound(false);
			}
		} else {
			setNotFound(false);
		}
	}, [filteredMovies]);

	return (
		<section className='movies'>
			<MoviesContext.Provider
				value={{
					setToggleShort,
					toggleShort,
					filterDuration,
					setFilteredMovies,
					allMovies,
				}}
			>
				<Header isUserLoggedIn={isUserLoggedIn} />
				<SearchForm
					querySearchHandler={querySearchHandler}
					onFilterMovies={toggleShortFilmFilter}
					toggleShort={toggleShort}
					filmFilterHandler={filmFilterHandler}
					setIsLoading={setIsLoading}
					setError={setError}
				/>
				<MoviesCardList
					cards={filteredMovies}
					isLoading={isLoading}
					isSavedFilms={false}
					error={error}
					notFound={notFound}
					savedFilms={savedFilms}
					handleLikeFilm={handleLikeFilm}
					onDeleteCard={onDeleteCard}
				/>
				<Footer />
			</MoviesContext.Provider>
		</section>
	);
}

export default Movies;
