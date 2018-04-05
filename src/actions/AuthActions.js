import firebase from 'firebase';
import {
	NAME_CHANGED,
	EMAIL_CHANGED,
	PHONE_CHANGED,
	STREET_CHANGED,
	HOUSENR_CHANGED,
	HOMETOWN_CHANGED,
	POSTAL_CHANGED,
	PASSWORD_CHANGED,
	ROLE_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	REGISTER_USER
} from './types';

export const nameChanged = (text) => {
	return {
		type: NAME_CHANGED,
		payload: text
	};
};

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const phoneChanged = (text) => {
	return {
		type: PHONE_CHANGED,
		payload: text
	};
};

export const streetChanged = (text) => {
	return {
		type: STREET_CHANGED,
		payload: text
	};
};

export const houseNrChanged = (text) => {
	return {
		type: HOUSENR_CHANGED,
		payload: text
	};
};

export const hometownChanged = (text) => {
	return {
		type: HOMETOWN_CHANGED,
		payload: text
	};
};

export const postalChanged = (text) => {
	return {
		type: POSTAL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

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

export const registerUser = ({ name, email, phone, street, houseNr, hometown, postal, password, role }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => registerUserSuccess(dispatch, user, name, email, phone, street, houseNr, hometown, postal, role))
			.catch(() => loginUserSuccess(dispatch));
	}
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const registerUserSuccess = (dispatch, user, name, email, phone, street, houseNr, hometown, postal, role) => {
	const { currentUser } = firebase.auth();

	firebase.database().ref(`/${role}s/${currentUser.uid}/data`)
    .push({
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
