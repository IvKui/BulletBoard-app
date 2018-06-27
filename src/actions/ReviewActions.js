import firebase from 'firebase';
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
} from './types';

export const getReviews = (providerId) => dispatch => {
	dispatch({ type: GET_REVIEWS })
	firebase.database()
		.ref(`users/providers/${providerId}/reviews`)
		.on(snapshot => {
			if(snapshot.val()) {
				getReviewsSuccess(dispatch, snapshot.val())
			} else {
				getReviewsFail(dispatch)
			}
		})
}

export const setReviewRating = (rating) => {
	return {
		type: SET_REVIEW_RATING,
		payload: rating
	};
};

export const setReviewRatingError = (error) => {
	return {
		type: SET_REVIEW_RATING_ERROR,
		payload: error
	};
};

export const setReviewText = (text) => {
	return {
		type: SET_REVIEW_TEXT,
		payload: text
	};
};

export const setReviewTextError = (error) => {
	return {
		type: SET_REVIEW_TEXT_ERROR,
		payload: error
	};
};

export const resetReviewErrors = () => {
		return {
			type: RESET_REVIEW_ERRORS
		}
}

export const setReviewError = (text) => {
	return {
		type: SET_REVIEW_ERROR,
		payload: text
	};
};

export const addReview = (providerId, consumer, reviewRating, reviewText) => dispatch => {
	dispatch({ type: ADD_REVIEW})
	firebase.database()
		.ref(`users/providers/${providerId}/reviews`)
		.set({
			id: consumer.id,
			rating: reviewRating,
			text: reviewText,
			image: consumer.image,
			name: consumer.name
		})
		.then(() => addReviewSuccess(dispatch))
		.catch(() => addReviewFail(dispatch))
}

const getReviewsSuccess = (dispatch, reviews) => {
	dispatch({
		type: GET_REVIEWS_SUCCESS,
		payload: reviews
	})
}

const getReviewsFail = (dispatch) => {
	dispatch({
		type: GET_REVIEWS_FAIL
	})
}

const addReviewSuccess = (dispatch) => {
	dispatch({
		type: ADD_REVIEW_SUCCESS
	})
}

const addReviewFail = (dispatch) => {
	dispatch({
		type: ADD_REVIEW_FAIL
	})
}
