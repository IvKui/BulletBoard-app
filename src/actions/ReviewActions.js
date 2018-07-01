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
	ADD_REVIEW_FAIL,
	SELECT_REVIEW
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

export const selectReview = (review) => {
	return {
		type: SELECT_REVIEW,
		payload: review
	};
};

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
			image: consumer.image ? consumer.image : null,
			name: consumer.name,
			provider: providerId
		})
		.then(() => addReviewSuccess(dispatch, providerId))
		.catch(() => addReviewFail(dispatch))
}

const calculateRating = providerId => {
	firebase.database()
		.ref(`users/providers/${providerId}`)
		.once('value')
		.then(snapshot => {
			if(snapshot.val()) {
				let ratings = []
				let total = 0
				Object.values(snapshot.val().reviews).map(item => {
					ratings.push(item.rating)
					total += item.rating
				})
				let average = total / ratings.length
				average = Math.round(average*2)/2
				snapshot.ref.child('rating').set(average)
			}
		})
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

const addReviewSuccess = (dispatch, providerId) => {
	calculateRating(providerId)
	dispatch({
		type: ADD_REVIEW_SUCCESS
	})
}

const addReviewFail = (dispatch) => {
	dispatch({
		type: ADD_REVIEW_FAIL
	})
}
