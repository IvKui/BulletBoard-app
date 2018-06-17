import {
	SELECT_SERVICE,
	EDIT_SERVICE,
	EDIT_SERVICE_ID,
	EDIT_SERVICE_NAME,
	EDIT_SERVICE_PRICES,
	EDIT_SERVICE_DAYS,
	EDIT_PRICES,
	EDIT_DAYS,
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
	selectedService: null,
	addServiceError: '',
	addServiceSelected: null,
	addServicePrices: {},
	addServiceDays: {},
	editServiceName: null,
	editServiceSelected: null,
	editServicePrices: {},
	editServiceDays: {},
	priceTitle: '',
	priceAmount: '',
	addDaySelected: '',
	dayStart: '',
	dayEnd: '',
	loading: true,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECT_SERVICE:
			return { ...state, selectedService: action.payload };

		case EDIT_SERVICE:
			return { ...state, editServiceSelected: action.payload };

		case EDIT_SERVICE_ID:
			return { ...state, editServiceSelected: action.payload };

		case EDIT_SERVICE_NAME:
			return { ...state, editServiceName: action.payload };

		case EDIT_SERVICE_PRICES:
			return { ...state, editServicePrices: action.payload };

		case EDIT_SERVICE_DAYS:
			return { ...state, editServiceDays: action.payload };

		case EDIT_PRICES:
			return { ...state, priceTitle: '', priceAmount: '', editServicePrices: action.payload };

		case EDIT_DAYS:
			return { ...state, addDaySelected: '', dayStart: '', dayEnd: '', editServiceDays: action.payload };

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
