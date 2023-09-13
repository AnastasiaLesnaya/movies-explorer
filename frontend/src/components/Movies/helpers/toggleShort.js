export const toggleShortFilmFilter = (
	setToggleShort,
	toggleShort,
	filterDuration,
	setFilteredMovies,
	allMovies
) => {
	setToggleShort(!toggleShort);
	if (!toggleShort) {
		if (filterDuration(allMovies).length === 0) {
			setFilteredMovies(filterDuration(allMovies));
		} else {
			setFilteredMovies(filterDuration(allMovies));
		}
	} else {
		setFilteredMovies(allMovies);
	}
	localStorage.setItem('shortMovies', !toggleShort);
};
