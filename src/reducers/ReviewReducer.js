import { NavigationActions } from 'react-navigation';
import {
	GET_REVIEWS,
	GET_REVIEWS_SUCCESS,
	GET_REVIEWS_FAIL,
	SET_REVIEW_RATING,
	SET_REVIEW_RATING_ERROR,
	SET_REVIEW_TEXT,
	SET_REVIEW_TEXT_ERROR,
	RESET_REVIEW_ERRORS,
	SET_REVIEW_ERROR,
	ADD_REVIEW,
	ADD_REVIEW_SUCCESS,
	ADD_REVIEW_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	reviews: [],
	reviewRating: null,
	reviewRatingError: null,
	reviewText: '',
	reviewTextError: '',
	reviewError: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_REVIEWS:
			return { ...state, loading: true }

		case GET_REVIEWS_SUCCESS:
			return { ...state, loading: false, reviews: action.payload }

		case GET_REVIEWS_FAIL:
			return { ...state, loading: false }

		case SET_REVIEW_RATING:
			return { ...state, reviewRating: action.payload };

		case SET_REVIEW_RATING_ERROR:
			return { ...state, reviewRatingError: action.payload };

		case SET_REVIEW_TEXT:
			return { ...state, reviewText: action.payload };

		case SET_REVIEW_TEXT_ERROR:
			return { ...state, reviewTextError: action.payload };

		case SET_REVIEW_ERROR:
			return { ...state, reviewError: action.payload };

		case RESET_REVIEW_ERRORS:
			return { ...state, reviewRatingError: '', reviewTextError: ''}

		case ADD_REVIEW:
			return { ...state, loading: true };

		case ADD_REVIEW_SUCCESS:
			return { ...state, loading: false, reviewRating: null, reviewText: '' };

		case ADD_REVIEW_FAIL:
			return { ...state, loading: false, reviewError: action.payload };

		default:
			return state;
	}
};
