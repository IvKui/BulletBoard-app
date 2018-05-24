import { NavigationActions } from 'react-navigation';
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
	REGISTER_USER_FAIL,
	REGISTER_USER
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	email: '',
	phone: '',
	street: '',
	houseNr: '',
	hometown: '',
	postal: '',
	password: '',
	role: '',
	user: null,
	loginError: '',
	registerError: 'ERROR!!!',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NAME_CHANGED:
			return { ...state, name: action.payload };

		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PHONE_CHANGED:
			return { ...state, phone: action.payload };

		case STREET_CHANGED:
			return { ...state, street: action.payload };

		case HOUSENR_CHANGED:
			return { ...state, houseNr: action.payload };

		case HOMETOWN_CHANGED:
			return { ...state, hometown: action.payload };

		case POSTAL_CHANGED:
			return { ...state, postal: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

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
