import * as api from '../../../utils/MainApi';

export const signUp = (
	{ name, email, password },
	setPopUp,
	setIsSuccess,
	signIn, 
    setIsLoading,
    navigate,
    setIsUserLoggedIn
) => {
	api
		.register(name, email, password)
		.then(() => {
			setPopUp(true);
			setIsSuccess(true);
			signIn(
				{ email, password },
				setIsLoading,
				setPopUp,
				setIsSuccess,
				navigate,
				setIsUserLoggedIn
			);
		})
		.catch((err) => {
			setPopUp(true);
			setIsSuccess(false);
			console.log(err);
		});
};

export const signIn = (
	{ email, password },
	setIsLoading,
	setPopUp,
	setIsSuccess,
	navigate,
	setIsUserLoggedIn
) => {
	setIsLoading(true);
	api
		.authorize(email, password)
		.then((res) => {
			if (res) {
				setPopUp(true);
				setIsSuccess(true);
				localStorage.setItem('jwt', res.token);
				navigate('/movies', { replace: true });
				setIsUserLoggedIn(true);
			}
		})
		.catch((err) => {
			setPopUp(true);
			setIsSuccess(false);
			console.log(err);
		})
		.finally(() => {
			setIsLoading(false);
		});
};
