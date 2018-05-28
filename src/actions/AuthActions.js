import firebase from 'firebase';
import {
	NAME_CHANGED,
	NAME_ERROR,
	EMAIL_CHANGED,
	EMAIL_ERROR,
	PHONE_CHANGED,
	PHONE_ERROR,
	STREET_CHANGED,
	STREET_ERROR,
	HOUSENR_CHANGED,
	HOUSENR_ERROR,
	HOMETOWN_CHANGED,
	HOMETOWN_ERROR,
	POSTAL_CHANGED,
	POSTAL_ERROR,
	PASSWORD_CHANGED,
	PASSWORD_ERROR,
	RESET_ERRORS,
	ROLE_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER,
	LOGIN_ERROR,
	REGISTER_USER_FAIL,
	REGISTER_USER
} from './types';

export const nameChanged = (text) => {
	return {
		type: NAME_CHANGED,
		payload: text
	};
};

export const nameError = (text) => {
	return {
		type: NAME_ERROR,
		payload: text
	};
};

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const emailError = (text) => {
	return {
		type: EMAIL_ERROR,
		payload: text
	};
};

export const phoneChanged = (text) => {
	return {
		type: PHONE_CHANGED,
		payload: text
	};
};

export const phoneError = (text) => {
	return {
		type: PHONE_ERROR,
		payload: text
	};
};

export const streetChanged = (text) => {
	return {
		type: STREET_CHANGED,
		payload: text
	};
};

export const streetError = (text) => {
	return {
		type: STREET_ERROR,
		payload: text
	};
};

export const houseNrChanged = (text) => {
	return {
		type: HOUSENR_CHANGED,
		payload: text
	};
};

export const houseNrError = (text) => {
	return {
		type: HOUSENR_ERROR,
		payload: text
	};
};

export const hometownChanged = (text) => {
	return {
		type: HOMETOWN_CHANGED,
		payload: text
	};
};

export const hometownError = (text) => {
	return {
		type: HOMETOWN_ERROR,
		payload: text
	};
};

export const postalChanged = (text) => {
	return {
		type: POSTAL_CHANGED,
		payload: text
	};
};

export const postalError = (text) => {
	return {
		type: POSTAL_ERROR,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const passwordError = (text) => {
	return {
		type: PASSWORD_ERROR,
		payload: text
	};
};

export const resetErrors = () => {
	return {
		type: RESET_ERRORS
	}
}

export const roleChanged = (text) => {
	return {
		type: ROLE_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({
			type: LOGOUT_USER
		});
	};
};

export const registerUser = ({ name, email, phone, street, houseNr, hometown, postal, password, role }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => registerUserSuccess(dispatch, user, name, email, phone, street, houseNr, hometown, postal, role))
			.catch(() => loginUserFail(dispatch));
	}
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispatch, user) => {
	console.log(user)
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const registerUserSuccess = (dispatch, user, name, email, phone, street, houseNr, hometown, postal, role) => {
	const { currentUser } = firebase.auth();
	if (role === '') { role='user' };
	firebase.database().ref(`/${role}s/${currentUser.uid}`)
    .set({
			name,
			email,
			phone,
			street,
			houseNr,
			hometown,
			postal
		}).then(() => {
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: user
			});
    })
		.catch(() => loginUserFail(dispatch));
};
