import { NavigationActions } from 'react-navigation';
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
	REGISTER_USER_FAIL,
	REGISTER_USER
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	nameErrorText: '',
	email: '',
	emailErrorText: '',
	phone: '',
	phoneErrorText: '',
	street: '',
	streetErrorText: '',
	houseNr: '',
	houseNrErrorText: '',
	hometown: '',
	hometownErrorText: '',
	postal: '',
	postalErrorText: '',
	password: '',
	passwordErrorText: '',
	role: '',
	user: null,
	loginError: '',
	registerError: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NAME_CHANGED:
			return { ...state, name: action.payload };

		case NAME_ERROR:
			return { ...state, nameErrorText: action.payload };

		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case EMAIL_ERROR:
			return { ...state, emailErrorText: action.payload };

		case PHONE_CHANGED:
			return { ...state, phone: action.payload };

		case PHONE_ERROR:
			return { ...state, phoneErrorText: action.payload };

		case STREET_CHANGED:
			return { ...state, street: action.payload };

		case STREET_ERROR:
			return { ...state, streetErrorText: action.payload };

		case HOUSENR_CHANGED:
			return { ...state, houseNr: action.payload };

		case HOUSENR_ERROR:
			return { ...state, houseNrErrorText: action.payload };

		case HOMETOWN_CHANGED:
			return { ...state, hometown: action.payload };

		case HOMETOWN_ERROR:
			return { ...state, hometownErrorText: action.payload };

		case POSTAL_CHANGED:
			return { ...state, postal: action.payload };

		case POSTAL_ERROR:
			return { ...state, postalErrorText: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case PASSWORD_ERROR:
			return { ...state, passwordErrorText: action.payload };

		case RESET_ERRORS:
			return {
				...state,
				nameErrorText: '',
				emailErrorText: '',
				phoneErrorText: '',
				streetErrorText: '',
				houseNrErrorText: '',
				hometownErrorText: '',
				postalErrorText: '',
				passwordErrorText: ''
			}

		case ROLE_CHANGED:
			return { ...state, role: action.payload };

		case LOGIN_USER:
			return { ...state, loading: true, error: '' };

		case REGISTER_USER:
			return { ...state, loading: true, error: '' };

		case REGISTER_USER_FAIL:
			console.log('error registation')
			return { ...state, registerError: 'Registation Failed.', loading: false };

		case LOGIN_USER_SUCCESS:
			console.log('logged in');
			return { ...state, ...INITIAL_STATE, user: action.payload };

		case LOGIN_USER_FAIL:
			console.log('error logging in')
			return { ...state, loginError: 'Authentication Failed.', password: '', loading: false };

		default:
			return state;
	}
};
