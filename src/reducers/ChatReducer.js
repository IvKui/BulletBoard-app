import {
	GET_MESSAGES,
	MESSAGE_CHANGED,
	CHANGE_TYPING_TEXT,
	CHANGE_LOAD_EARLIER
} from '../actions/types';

const INITIAL_STATE = {
	messages: null,
	newMessage: '',
	typingText: false,
	loadEarlier: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case GET_MESSAGES:
			return { ...state, messages: action.payload };

		case MESSAGE_CHANGED:
			return { ...state, newMessage: action.payload };

		case CHANGE_TYPING_TEXT:
			return { ...state, typingText: action.payload}

		case CHANGE_LOAD_EARLIER:
			return { ...state, loadEarlier: action.payload}

		default:
			return state;
	}
};
