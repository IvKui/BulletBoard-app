import { NavigationActions } from 'react-navigation';
import {
	SELECTED_PROVIDER,
	SELECTED_PROVIDER_SERVICE,
	GET_PROVIDER,
	GET_PROVIDER_SUCCESS,
	GET_PROVIDER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	selectedProvider: null,
	selectedProviderService: null,
	chatPartner: null,
	loading: true
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECTED_PROVIDER:
			return { ...state, selectedProvider: action.payload };

		case SELECTED_PROVIDER_SERVICE:
		 return { ...state, selectedProviderService: action.payload };

		case GET_PROVIDER:
			return { ...state, loading: true }

		case GET_PROVIDER_SUCCESS:
			return { ...state, loading: false, selectedProvider: action.payload }

		case GET_PROVIDER_FAIL:
			return { ...state, loading: false }

		default:
			return state;
	}
};
