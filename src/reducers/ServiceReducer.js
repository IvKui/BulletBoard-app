import {
	ADD_SERVICE_SELECTED,
	ADD_AVAILABILITY,
	PRICE_TITLE_CHANGED,
	PRICE_AMOUNT_CHANGED,
	ADD_PRICE,
	DAY_CHANGED,
	DAY_START_CHANGED,
	DAY_END_CHANGED,
	ADD_DAY,
	ADD_SERVICE,
	ADD_SERVICE_SUCCESS,
	ADD_SERVICE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	services: {},
	loading: true,
	addServiceError: '',
	addServiceSelected: null,
	addServicePrices: {},
	addServiceDays: {},
	priceTitle: '',
	priceAmount: '',
	addDaySelected: '',
	dayStart: '',
	dayEnd: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_SERVICE_SELECTED:
			return { ...state, addServiceSelected: action.payload };

		case ADD_PRICE:
			return { ...state, priceTitle: '', priceAmount: '', addServicePrices: action.payload };

		case PRICE_TITLE_CHANGED:
			return { ...state, priceTitle: action.payload };

		case PRICE_AMOUNT_CHANGED:
			return { ...state, priceAmount: action.payload };

		case DAY_CHANGED:
			return { ...state, addDaySelected: action.payload };

		case DAY_START_CHANGED:
			return { ...state, dayStart: action.payload };

		case DAY_END_CHANGED:
			return { ...state, dayEnd: action.payload };

		case ADD_DAY:
			return { ...state, addDaySelected: '', dayStart: '', dayEnd: '', addServiceDays: action.payload };

		case ADD_SERVICE:
			return { ...state, loading: true };

		case ADD_SERVICE_SUCCESS:
			return {
				...state,
				loading: false,
				addServiceSelected: null,
				addServicePrices: {},
				addServiceDays: {},
				priceTitle: '',
				priceAmount: '',
				addDaySelected: '',
				dayStart: '',
				dayEnd: ''
			};

		case ADD_SERVICE_FAIL:
			return { ...state, loading: false, addServiceError: 'Er is iets fout gegaan' };

		default:
			return state;
	}
};
