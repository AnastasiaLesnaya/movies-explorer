import {
	NUMBER_OF_MOVIES_DESKTOP,
	TABLET_ITEMS_PER_PAGE,
	MOBILE_ITEMS_PER_PAGE,
} from '../../../utils/constants';

export const addMoreHandler = (setShownMovies, shownMovies) => {
	const display = window.innerWidth;
	if (display > 1180) {
		setShownMovies(shownMovies + NUMBER_OF_MOVIES_DESKTOP);
	} else if (display > 767) {
		setShownMovies(shownMovies + TABLET_ITEMS_PER_PAGE);
	} else {
		setShownMovies(shownMovies + MOBILE_ITEMS_PER_PAGE);
	}
};
