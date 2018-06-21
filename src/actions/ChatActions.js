import firebase from 'firebase';
import {
	GET_CHATS,
	GET_CHATS_SUCCESS,
	GET_CHATS_FAIL,
	SET_CHAT,
	SET_MESSAGES,
	MESSAGE_CHANGED,
	CHANGE_TYPING_TEXT,
	CHANGE_LOAD_EARLIER
} from './types';

export const getChats = (user) => dispatch => {
	dispatch({ type: GET_CHATS })

	firebase.database()
		.ref('chats/')
		.on('value', snapshot => {
			if(snapshot.val()) {
				const allMessages = snapshot.val()
				let chats = []
				Object.values(allMessages).map(item => {
					if(user.role === 'provider') {
						if(item.provider === user.id) {
							const chat = {
								id: item.id,
								partner: item.consumer
							}
							chats.push(chat)
						}
					} else if (user.role === 'user') {
						if(item.consumer === user.id) {
							const chat = {
								id: item.id,
								partner: item.provider
							}
							chats.push(chat)
						}
					}
				})
				getDataByChats(dispatch, chats)
			}
		})
};

export const setChat = (chat) => {
	return {
		type: SET_CHAT,
		payload: chat
	};
};

export const setMessages = (messages) => {
	return {
		type: SET_MESSAGES,
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

const getDataByChats = (dispatch, chats) => {
	console.log(chats)
	let chatData = []
	chats.map(item => {
		firebase.database()
			.ref(`providers/${item.partner}`)
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					const chat = {
						partnerId: snapshot.val().id,
						partnerName: snapshot.val().name,
						partnerImage: snapshot.val().image,
						chatId: item.id
					}
					chatData.push(chat)
					getChatsSuccess(dispatch, chatData)
				} else {
					firebase.database()
						.ref(`users/${item.partner}`)
						.once('value')
						.then(snapshot => {
							if(snapshot.val()) {
								const chat = {
									partnerId: snapshot.val().id,
									partnerName: snapshot.val().name,
									partnerImage: snapshot.val().image,
									chatId: item.id
								}
								console.log(chat)
								chatData.push(chat)
								getChatsSuccess(dispatch, chatData)
							}
						})
						.catch(() => getChatsFail(dispatch))
				}
			})
	})
}

const getChatsSuccess = (dispatch, chats) => {
	console.log(chats)
	dispatch({
		type: GET_CHATS_SUCCESS,
		payload: chats
	});
};

const getChatsFail = (dispatch) => {
	dispatch({
		type: GET_CHATS_FAIL
	});
};
