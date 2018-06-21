import {
	GET_CHATS,
	GET_CHATS_SUCCESS,
	GET_CHATS_FAIL,
	SET_CHAT,
	SET_MESSAGES,
	MESSAGE_CHANGED,
	CHANGE_TYPING_TEXT,
	CHANGE_LOAD_EARLIER
} from '../actions/types';

const INITIAL_STATE = {
	chats: [],
	chat: null,
	chatsLoading: false,
	messages: null,
	newMessage: '',
	typingText: false,
	loadEarlier: false,
	chatPartner: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CHAT:
			return { ...state, chat: action.payload };

		case GET_CHATS:
			return { ...state, chatsLoading: true };

		case GET_CHATS_SUCCESS:
			return { ...state, chatsLoading: false, chats: action.payload };

		case GET_CHATS_FAIL:
			return { ...state, chatsLoading: false };

		case SET_MESSAGES:
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
