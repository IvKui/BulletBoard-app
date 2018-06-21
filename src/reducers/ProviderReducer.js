import { NavigationActions } from 'react-navigation';
import {
	SELECTED_PROVIDER,
	SELECTED_PROVIDER_SERVICE
} from '../actions/types';

const INITIAL_STATE = {
	selectedProvider: null,
	selectedProviderService: null,
	chatPartner: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECTED_PROVIDER:
			return { ...state, selectedProvider: action.payload };

		case SELECTED_PROVIDER_SERVICE:
		 return { ...state, selectedProviderService: action.payload };

		default:
			return state;
	}
};
