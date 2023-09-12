import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterDuration } from '../../utils/functions';
import SearchForm from '../SearchForm/SearchForm';
import SavedContext from '../../contexts/SavedContext';

function SavedMovies({ isUserLoggedIn, savedFilms, onDeleteCard }) {
	const [toggleShort, setToggleShort] = useState(false);
	const [filteredMovies, setFilteredMovies] = useState(savedFilms);
	const [searchQuery, setSearchQuery] = useState('');
	const [notFound, setNotFound] = useState(false);

	function querySearchHandler(query) {
		setSearchQuery(query);
	}

	function toggleShortFilmFilter() {
		setToggleShort(!toggleShort);
	}

	useEffect(() => {
		const moviesCardList = filterMovies(savedFilms, searchQuery);
		setFilteredMovies(toggleShort ? filterDuration(moviesCardList) : moviesCardList);
	}, [savedFilms, toggleShort, searchQuery]);

	useEffect(() => {
		if (filteredMovies.length === 0) {
			setNotFound(true);
		} else {
			setNotFound(false);
		}
	}, [filteredMovies]);

	return (
		<section className='movies'>
			<SavedContext.Provider
				value={{
					setToggleShort,
				}}
			>
				<Header isUserLoggedIn={isUserLoggedIn} />
				<SearchForm
					querySearchHandler={querySearchHandler}
					onFilterMovies={toggleShortFilmFilter}
          isSaved
				/>
				<MoviesCardList
					notFound={notFound}
					isSavedFilms={true}
					cards={filteredMovies}
					savedFilms={savedFilms}
					onDeleteCard={onDeleteCard}
				/>
				<Footer />
			</SavedContext.Provider>
		</section>
	);
}

export default SavedMovies;
