import * as api from '../../../utils/MainApi';

export const likeFilm = (
	card,
	setSavedFilms,
	savedFilms,
	setIsSuccess,
	handleErrorUnauthorized
) => {
	api
		.addNewCard(card)
		.then((newMovie) => {
			setSavedFilms([newMovie, ...savedFilms]);
		})
		.catch((err) => {
			setIsSuccess(false);
			console.log(err);
			handleErrorUnauthorized(err);
		});
};
