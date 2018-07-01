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
								partner: item.consumer,
								lastMessage: item.lastMessage
							}
							chats.push(chat)
						}
					} else if (user.role === 'consumer') {
						if(item.consumer === user.id) {
							const chat = {
								id: item.id,
								partner: item.provider,
								lastMessage: item.lastMessage
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
	firebase.database()
		.ref('users/')
		.once('value', snapshot => {
			const users = snapshot.val()
			let chatData = []

			chats.map(item => {
				if(users.providers[item.partner]) {
					chatData.push({
						partnerId: users.providers[item.partner].id,
						partnerName: users.providers[item.partner].name,
						partnerImage: users.providers[item.partner].image,
						lastMessage: item.lastMessage,
						chatId: item.id
					})
				} else if (users.consumers[item.partner]) {
					chatData.push({
						partnerId: users.consumers[item.partner].id,
						partnerName: users.consumers[item.partner].name,
						partnerImage: users.consumers[item.partner].image,
						lastMessage: item.lastMessage,
						chatId: item.id
					})
				}
			})
			chatData.sort((a, b) => {
				const dateA = new Date(a.lastMessage.createdAt)
				const dateB = new Date(b.lastMessage.createdAt)

				if(dateA > dateB) return -1
				if(dateA < dateB) return 1
				return 0
			})
			getChatsSuccess(dispatch, chatData)
		})
}

const getChatsSuccess = (dispatch, chats) => {
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
