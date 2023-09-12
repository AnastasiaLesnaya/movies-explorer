export const qtyOfShowingMovies = (setShownMovies) => {
    const display = window.innerWidth;
    if (display > 1180) {
        setShownMovies(12);
    } else if (display > 767) {
        setShownMovies(8);
    } else {
        setShownMovies(5);
    }
}