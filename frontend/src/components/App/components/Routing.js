import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import Footer from '../../Footer/Footer';
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import NotFound from '../../NotFound/NotFound';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

const Routing = ({
	isUserLoggedIn,
	signIn,
	isLoading,
	Movies,
	savedFilms,
	likeFilm,
	deleteFilmCard,
	SavedMovies,
	signOut,
	editUserData,
	Profile,
	signUp,
}) => {
	return (
		<>
			<Routes>
				<Route
					path={'/'}
					element={
						<>
							<Header isUserLoggedIn={isUserLoggedIn} />
							<Main />
							<Footer />
						</>
					}
				/>
				<Route
					path={'/signin'}
					element={
						isUserLoggedIn ? (
							<Navigate
								to='/movies'
								replace
							/>
						) : (
							<Login
								onAuthorization={signIn}
								isLoading={isLoading}
							/>
						)
					}
				/>
				<Route
					path={'/signup'}
					element={
						isUserLoggedIn ? (
							<Navigate
								to='/movies'
								replace
							/>
						) : (
							<Register
								onRegister={signUp}
								isLoading={isLoading}
							/>
						)
					}
				/>
				<Route
					path={'*'}
					element={<NotFound />}
				/>
				<Route
					path={'/movies'}
					element={
						<ProtectedRoute
							path='/movies'
							component={Movies}
							isUserLoggedIn={isUserLoggedIn}
							savedFilms={savedFilms}
							handleLikeFilm={likeFilm}
							onDeleteCard={deleteFilmCard}
						/>
					}
				/>
				<Route
					path={'/saved-movies'}
					element={
						<ProtectedRoute
							path='/saved-movies'
							isUserLoggedIn={isUserLoggedIn}
							savedFilms={savedFilms}
							onDeleteCard={deleteFilmCard}
							component={SavedMovies}
						/>
					}
				/>
				<Route
					path={'/profile'}
					element={
						<ProtectedRoute
							path='/profile'
							isLoading={isLoading}
							signOut={signOut}
							onUpdateUser={editUserData}
							isUserLoggedIn={isUserLoggedIn}
							component={Profile}
						/>
					}
				/>
			</Routes>
		</>
	);
};

export default Routing;
