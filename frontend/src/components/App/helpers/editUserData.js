import * as api from '../../../utils/MainApi';

export const editUserData = (
	newUserInfo,
	setIsLoading,
	setPopUpUpdate,
	setIsUpdate,
	setUser,
	handleErrorUnauthorized
) => {
	setIsLoading(true);
	api
		.editProfileUserInfo(newUserInfo)
		.then((data) => {
			setPopUpUpdate(true);
			setIsUpdate(true);
			setUser(data);
		})
		.catch((err) => {
			setPopUpUpdate(true);
			setIsUpdate(false);
			console.log(err);
			handleErrorUnauthorized(err);
		})
		.finally(() => {
			setIsLoading(false);
		});
};
