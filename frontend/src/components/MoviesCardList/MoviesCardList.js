import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import SearchError from '../SearchError/SearchError';
import './MoviesCardList.css';

import {
	qtyOfShowingMovies,
	addMoreHandler,
	searchForSavedMovies,
} from './helpers/index';

function MoviesCardList({
	cards,
	isLoading,
	isSavedFilms,
	savedFilms,
	error,
	notFound,
	handleLikeFilm,
	onDeleteCard,
}) {
	const [shownMovies, setShownMovies] = useState(0);
	const { pathname } = useLocation();

	useEffect(() => {
		qtyOfShowingMovies(setShownMovies);
	}, [cards]);

	useEffect(() => {
		let resizeTimeout;

		function handleResize() {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				qtyOfShowingMovies(setShownMovies);
			}, 500);
		}
		qtyOfShowingMovies(setShownMovies);

		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(resizeTimeout);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section className='films'>
			{isLoading && <Preloader />}
			{notFound && !isLoading && <SearchError errorText={'Ничего не найдено'} />}
			{error && !isLoading && (
				<SearchError
					errorText={
						'Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
					}
				/>
			)}
			{!isLoading && !error && !notFound && (
				<>
					{pathname === '/saved-movies' ? (
						<>
							<ul className='films__list'>
								{cards.map((card) => (
									<MoviesCard
										key={isSavedFilms ? card._id : card.id}
										saved={searchForSavedMovies(savedFilms, card)}
										cards={cards}
										card={card}
										isSavedFilms={isSavedFilms}
										handleLikeFilm={handleLikeFilm}
										onDeleteCard={onDeleteCard}
										savedFilms={savedFilms}
									/>
								))}
							</ul>
							<div className='films__button-container'></div>
						</>
					) : (
						<>
							<ul className='films__list'>
								{cards.slice(0, shownMovies).map((card) => (
									<MoviesCard
										key={isSavedFilms ? card._id : card.id}
										saved={searchForSavedMovies(savedFilms, card)}
										cards={cards}
										card={card}
										isSavedFilms={isSavedFilms}
										handleLikeFilm={handleLikeFilm}
										onDeleteCard={onDeleteCard}
										savedFilms={savedFilms}
									/>
								))}
							</ul>
							<div className='films__button-container'>
								{cards.length > shownMovies && (
									<button
										className='films__button'
										onClick={() => addMoreHandler(setShownMovies, shownMovies)}
									>
										Ещё
									</button>
								)}
							</div>
						</>
					)}
				</>
			)}
		</section>
	);
}

export default MoviesCardList;
