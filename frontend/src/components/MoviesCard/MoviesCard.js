import React, { useContext } from 'react';
import './MoviesCard.css';
import { durationConverter } from '../../utils/functions';
import AppContext from '../../contexts/AppContext';

function MoviesCard({
	card,
	isSavedFilms,
	handleLikeFilm,
	onDeleteCard,
	saved,
	savedFilms,
}) {
	const { setSavedFilms, setIsSuccess, handleErrorUnauthorized } =
		useContext(AppContext);

	function onCardClick() {
		if (saved) {
			onDeleteCard(
				savedFilms.filter((m) => m.movieId === card.id)[0],
				setSavedFilms,
				setIsSuccess,
				handleErrorUnauthorized
			);
		} else {
			handleLikeFilm(
				card,
				setSavedFilms,
				savedFilms,
				setIsSuccess,
				handleErrorUnauthorized
			);
		}
	}

	function onDelete() {
		onDeleteCard(card, setSavedFilms, setIsSuccess, handleErrorUnauthorized);
	}

	const cardLikeButtonClassName = `${
		saved ? 'film__like-button film__like-button_active' : 'film__like-button'
	}`;

	return (
		<>
			<li
				key={card.id}
				className='film'
			>
				<a
					href={card.trailerLink}
					target='_blank'
					rel='noreferrer'
				>
					<img
						className='film__image'
						alt={card.nameRU}
						src={
							isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`
						}
					/>
				</a>
				<div className='film__container'>
					<div className='film__title-block'>
						<h2 className='film__title'>{card.nameRU}</h2>
						<span className='film__time'>{durationConverter(card.duration)}</span>
					</div>

					{isSavedFilms ? (
						<button
							type='button'
							className='film__delete-button'
							onClick={onDelete}
						></button>
					) : (
						<button
							type='button'
							className={cardLikeButtonClassName}
							onClick={onCardClick}
						></button>
					)}
				</div>
			</li>
		</>
	);
}

export default MoviesCard;
