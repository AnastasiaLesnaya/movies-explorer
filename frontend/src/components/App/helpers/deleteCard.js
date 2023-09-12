import * as api from '../../../utils/MainApi';

export const deleteFilmCard = (
	card,
	setSavedFilms,
	setIsSuccess,
	handleErrorUnauthorized
) => {
	api
		.deleteCard(card._id)
		.then(() => {
			setSavedFilms((state) => state.filter((item) => item._id !== card._id));
		})
		.catch((err) => {
			setIsSuccess(false);
			console.log(err);
			handleErrorUnauthorized(err);
		});
};
