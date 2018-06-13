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
			return { ...state, name: action.payload };

		default:
			return state;
	}
};
