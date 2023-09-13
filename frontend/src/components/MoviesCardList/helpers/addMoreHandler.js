import {
	NUMBER_OF_MOVIES_DESKTOP,
	TABLET_ITEMS_PER_PAGE,
	MOBILE_ITEMS_PER_PAGE,
	DESKTOP_BREAKPOINT,
    MID_DESKTOP_BREAKPOINT,
    TABLET_BREAKPOINT,
} from '../../../utils/constants';

export const addMoreHandler = (setShownMovies, shownMovies) => {
	const display = window.innerWidth;
	if (display > DESKTOP_BREAKPOINT) {
		setShownMovies(shownMovies + NUMBER_OF_MOVIES_DESKTOP);
	} else if (display >= MID_DESKTOP_BREAKPOINT) {
		setShownMovies(shownMovies + NUMBER_OF_MOVIES_DESKTOP);
	} else if (display > TABLET_BREAKPOINT) {
		setShownMovies(shownMovies + TABLET_ITEMS_PER_PAGE);
	} else {
		setShownMovies(shownMovies + MOBILE_ITEMS_PER_PAGE);
	}
};


