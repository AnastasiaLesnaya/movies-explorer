import {
    DESKTOP_FILM_COUNT,
    TABLET_FILM_COUNT,
    MOBILE_FILM_COUNT,
    DESKTOP_BREAKPOINT,
    MID_DESKTOP_BREAKPOINT,
    TABLET_BREAKPOINT,
} from '../../../utils/constants';

export const qtyOfShowingMovies = (setShownMovies) => {
    const display = window.innerWidth;
    if (display > DESKTOP_BREAKPOINT) {
        setShownMovies(DESKTOP_FILM_COUNT);
    } else if (display >= MID_DESKTOP_BREAKPOINT) {
        setShownMovies(DESKTOP_FILM_COUNT);
    }
     else if (display > TABLET_BREAKPOINT) {
        setShownMovies(TABLET_FILM_COUNT);
    } else {
        setShownMovies(MOBILE_FILM_COUNT);
    }
}