import { NavigationActions } from 'react-navigation';
import {
	PROVIDER_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	image: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PROVIDER_SELECTED:
		console.log(action.payload)
			return { ...state, name: action.payload };
		//
		// case PASSWORD_CHANGED:
		// 	return { ...state, password: action.payload };
		//
		// case LOGIN_USER:
		// 	return { ...state, loading: true, error: '' };
		//
		// case REGISTER_USER:
		// 	return { ...state, loading: true, error: '' };
		//
		// case LOGIN_USER_SUCCESS:
		// 	console.log('logged in');
		// 	return { ...state, ...INITIAL_STATE, user: action.payload };
		//
		// case LOGIN_USER_FAIL:
		// 	console.log('error logging in')
		// 	return { ...state, error: 'Authentication Failed.', password: '', loading: false };

		default:
			return state;
	}
};
