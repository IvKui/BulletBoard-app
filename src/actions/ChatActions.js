import firebase from 'firebase';
import {
	GET_MESSAGES,
	MESSAGE_CHANGED,
	CHANGE_TYPING_TEXT,
	CHANGE_LOAD_EARLIER
} from './types';

export const getMessages = (messages) => {
	return {
		type: GET_MESSAGES,
		payload: messages
	};
};

export const messageChanged = (text) => {
	return {
		type: MESSAGE_CHANGED,
		payload: text
	};
};

export const changeTypingText = (typingText) => {
	return {
		type: CHANGE_TYPING_TEXT,
		payload: typingText
	};
};

export const changeLoadEarlier = (loadEarlier) => {
	return {
		type: CHANGE_LOAD_EARLIER,
		payload: loadEarlier
	};
};
