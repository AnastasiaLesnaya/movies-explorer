export const signOut = (setIsUserLoggedIn, navigate) => {
    setIsUserLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('movieSearch');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('allMovies');
    localStorage.clear();
    navigate('/');
};