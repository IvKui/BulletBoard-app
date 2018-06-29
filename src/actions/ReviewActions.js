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

export const getProviderReviews = id => dispatch => {
	dispatch({ type: GET_REVIEWS })
	firebase.database()
		.ref(`users/providers/${id}/reviews`)
		.once('value')
		.then(snapshot => dispatch({ type: GET_REVIEWS_SUCCESS, payload: Object.values(snapshot.val()) }))
		.catch(() => dispatch({ type: GET_REVIEWS_FAIL }))
}

export const getConsumerReviews = id => dispatch => {
	console.log(id)
	dispatch({ type: GET_REVIEWS })
	firebase.database()
		.ref(`users/providers/`)
		.once('value')
		.then(snapshot => {
			if(snapshot.val()) {
				let reviews = []
				Object.values(snapshot.val()).map(item => {
					if(item.reviews) {
						if(item.reviews[id]) {
							reviews.push({
								...item.reviews[id],
								image: item.image,
								name: item.name
							})
						}
					}
				})
				dispatch({ type: GET_REVIEWS_SUCCESS, payload: reviews })
			} else {
				dispatch({ type: GET_REVIEWS_FAIL })
			}
		})
		.catch(() => dispatch({ type: GET_REVIEWS_FAIL }))
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
		.child(consumer.id)
		.set({
			id: `${providerId}-${consumer.id}`,
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
