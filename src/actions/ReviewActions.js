import firebase from 'firebase';
import {
	REVIEW_TEXT
} from './types';

export const changeReviewText = (text) => {
	return {
		type: REVIEW_TEXT,
		payload: text
	};
};
