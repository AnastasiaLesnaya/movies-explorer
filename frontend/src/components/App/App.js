import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import './App.css';
import * as api from '../../utils/MainApi';
import Routing from './components/Routing';
import AppContext from '../../contexts/AppContext';
import {
	signUp,
	signIn,
	editUserData,
	deleteFilmCard,
	likeFilm,
	signOut,
} from './helpers';
import PopUp from '../popUp/PopUp';
import PopUpUpdate from '../popUpUpdate/PopUpUpdate';

function App() {
	const [user, setUser] = useState({});
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [savedFilms, setSavedFilms] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [popUp, setPopUp] = useState(false);
	const [popUpUpdate, setPopUpUpdate] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const isOpen = popUp || popUpUpdate;
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	useEffect(() => {
		const jwt = localStorage.getItem('jwt');
		console.log(jwt);
		if (jwt) {
			api
				.getContent(jwt)
				.then((res) => {
					if (res) {
						localStorage.removeItem('allMovies');
						setIsUserLoggedIn(true);
					}
					navigate(path);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	useEffect(() => {
		if (isUserLoggedIn) {
			api
				.getRealUserInfo()
				.then((profileInfo) => {
					setUser(profileInfo);
				})
				.catch((err) => {
					console.log(err);
				});
			api
				.getMovies()
				.then((cardsData) => {
					console.log(cardsData);
					setSavedFilms(cardsData.reverse());
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isUserLoggedIn]);

	useEffect(() => {
		function closeByEscapePopups(evt) {
			if (evt.key === 'Escape') {
				closeAllPopups();
			}
		}
		if (isOpen) {
			document.addEventListener('keydown', closeByEscapePopups);
			return () => {
				document.removeEventListener('keydown', closeByEscapePopups);
			};
		}
	}, [isOpen]);

	function handleErrorUnauthorized(err) {
		if (err === 'Error: 401') {
			signOut();
		}
	}

	function closeAllPopups() {
		setPopUp(false);
		setPopUpUpdate(false);
	}

	function closeByOverlayPopups(event) {
		if (event.target === event.currentTarget) {
			closeAllPopups();
		}
	}

	return (
		<CurrentUserContext.Provider value={user}>
			<div className='page'>
				<div className='page__container'>
					<AppContext.Provider
						value={{
							setPopUpUpdate,
							setPopUp,
							setIsSuccess,
							signIn,
							setIsLoading,
							navigate,
							setIsUserLoggedIn,
							setIsUpdate,
							setUser,
							handleErrorUnauthorized,
							setSavedFilms,
							savedFilms,
						}}
					>
						<Routing
							isUserLoggedIn={isUserLoggedIn}
							signIn={signIn}
							isLoading={isLoading}
							Movies={Movies}
							savedFilms={savedFilms}
							likeFilm={likeFilm}
							deleteFilmCard={deleteFilmCard}
							SavedMovies={SavedMovies}
							signOut={signOut}
							editUserData={editUserData}
							signUp={signUp}
							Profile={Profile}
						/>
					</AppContext.Provider>
					<PopUp
						isOpen={popUp}
						isSuccess={isSuccess}
						onClose={closeAllPopups}
						onCloseOverlay={closeByOverlayPopups}
					/>
					<PopUpUpdate
						isOpen={popUpUpdate}
						isUpdate={isUpdate}
						onClose={closeAllPopups}
						onCloseOverlay={closeByOverlayPopups}
					/>
				</div>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
