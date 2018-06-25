import { NavigationActions } from 'react-navigation';
import {
	REVIEW_TEXT
} from '../actions/types';

const INITIAL_STATE = {
	reviewText: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REVIEW_TEXT:
			return { ...state, reviewText: action.payload };

		default:
			return state;
	}
};
