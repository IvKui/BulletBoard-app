import {
	SELECT_SERVICE
} from '../actions/types';

const INITIAL_STATE = {
	services: {},
	selectedService: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECT_SERVICE:
			return { ...state, selectedService: action.payload };

		default:
			return state;
	}
};
