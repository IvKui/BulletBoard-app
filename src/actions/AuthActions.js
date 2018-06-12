import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
	NAME_CHANGED,
	NAME_ERROR,
	EMAIL_CHANGED,
	EMAIL_ERROR,
	PHONE_CHANGED,
	PHONE_ERROR,
	STREET_CHANGED,
	STREET_ERROR,
	HOUSENR_CHANGED,
	HOUSENR_ERROR,
	HOMETOWN_CHANGED,
	HOMETOWN_ERROR,
	POSTAL_CHANGED,
	POSTAL_ERROR,
	PASSWORD_CHANGED,
	PASSWORD_ERROR,
	PASSWORD_CONFIRM_CHANGED,
	PASSWORD_CONFIRM_ERROR,
	RESET_ERRORS,
	ROLE_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	LOGIN_ERROR,
	LOGOUT_USER,
	REGISTER_USER_FAIL,
	REGISTER_USER,
	USER_KEY
} from './types';

export const nameChanged = (text) => {
	return {
		type: NAME_CHANGED,
		payload: text
	};
};

export const nameError = (text) => {
	return {
		type: NAME_ERROR,
		payload: text
	};
};

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const emailError = (text) => {
	return {
		type: EMAIL_ERROR,
		payload: text
	};
};

export const phoneChanged = (text) => {
	return {
		type: PHONE_CHANGED,
		payload: text
	};
};

export const phoneError = (text) => {
	return {
		type: PHONE_ERROR,
		payload: text
	};
};

export const streetChanged = (text) => {
	return {
		type: STREET_CHANGED,
		payload: text
	};
};

export const streetError = (text) => {
	return {
		type: STREET_ERROR,
		payload: text
	};
};

export const houseNrChanged = (text) => {
	return {
		type: HOUSENR_CHANGED,
		payload: text
	};
};

export const houseNrError = (text) => {
	return {
		type: HOUSENR_ERROR,
		payload: text
	};
};

export const hometownChanged = (text) => {
	return {
		type: HOMETOWN_CHANGED,
		payload: text
	};
};

export const hometownError = (text) => {
	return {
		type: HOMETOWN_ERROR,
		payload: text
	};
};

export const postalChanged = (text) => {
	return {
		type: POSTAL_CHANGED,
		payload: text
	};
};

export const postalError = (text) => {
	return {
		type: POSTAL_ERROR,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const passwordError = (text) => {
	return {
		type: PASSWORD_ERROR,
		payload: text
	};
};

export const passwordConfirmChanged = (text) => {
	return {
		type: PASSWORD_CONFIRM_CHANGED,
		payload: text
	};
};

export const passwordConfirmError = (text) => {
	return {
		type: PASSWORD_CONFIRM_ERROR,
		payload: text
	};
};

export const resetErrors = () => {
	return {
		type: RESET_ERRORS
	}
}

export const roleChanged = (text) => {
	return {
		type: ROLE_CHANGED,
		payload: text
	};
};

export const loginUser = ({ navigation, email, password }) => dispatch => {
		if(email && password) {
			dispatch({ type: LOGIN_USER });
			firebase.auth().signInWithEmailAndPassword(email, password)
				.then(user => {
					getUser(user.uid)
						.then((res) => {
							loginUserSuccess(navigation, dispatch, res, user.uid)
						})
				})
				.catch(() => loginUserFail(dispatch));
		} else {
			dispatch({
				type: LOGIN_ERROR,
				payload: 'Vul uw inloggegevens in'
			})
		}
};

export const registerUser = ({ navigation, name, email, phone, street, houseNr, hometown, postal, password, role }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => {
				registerUserSuccess(navigation, dispatch, user, name, email, phone, street, houseNr, hometown, postal, role)
			})
			.catch(() => loginUserFail(dispatch));
	}
}

export const updateUser = ({ navigation, name, email, phone, street, houseNr, hometown, postal, role}) => {
	return (dispatch) => {
		console.log('update user')

		dispatch({ type: UPDATE_USER });

		const uid = firebase.auth().currentUser.uid
		firebase.database().ref(`/${role}s/${uid}`).update({
			name,
			email,
			phone,
			street,
			houseNr,
			hometown,
			postal
		})
			.then(user => {
				updateUserSuccess(dispatch, navigation, firebase.auth().currentUser)
			})
			.catch(() => updateUserFail(dispatch, navigation));
	}
}

export const updateUserSuccess = ({ dispatch, navigation, user }) => {
	return (dispatch) => {
		console.log('update user success')
		dispatch({
			type: UPDATE_USER_SUCCESS,
			payload: user
		});
		navigation.navigate('MainNav')
	}
}

export const updateUserFail = ({ dispatch, navigation }) => {
	return (dispatch) => {
		console.log('update user fail')
		dispatch({ type: UPDATE_USER_FAIL });
		navigation.navigate('MainNav')
	}
}

export const logoutUser = (dispatch) => {
	return (dispatch) => {
		dispatch({ type: LOGOUT_USER })

		console.log('logging out')

		AsyncStorage.removeItem(USER_KEY)
	}
}

export const isSignedIn = () => {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(USER_KEY)
		.then(res => {
			if (res !== null) {
				console.log('User is logged in')
				resolve(res);
			} else {
				console.log('User is not logged in')
				resolve(null);
			}
		})
		.catch(err => reject(err));
	});
}

export const getUser = (userKey) => {
	return new Promise((resolve, reject) => {
		firebase.database()
			.ref(`providers/${userKey}`)
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					let user = snapshot.val();
					user.role = 'provider'
					resolve(user)
				} else {
					firebase.database()
						.ref(`users/${userKey}`)
						.once('value')
						.then(snapshot => {
							if(snapshot.val()) {
								let user = snapshot.val();
								user.role = 'user'
								resolve(user)
							} else {
								resolve(null)
							}
						})
				}
			})
	})
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (navigation, dispatch, user, uid) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	AsyncStorage.setItem(USER_KEY, uid)

	if(user.role === 'provider') {
		navigation.navigate('ProviderNav')
	} else if (user.role === 'user') {
		navigation.navigate('ConsumerNav')
	}
};

const registerUserSuccess = (navigation, dispatch, user, name, email, phone, street, houseNr, hometown, postal, role) => {
	if( role === '' ) {
		role = 'user'
	}

	const newUser = {
		name,
		email,
		phone,
		street,
		houseNr,
		hometown,
		postal
	}

	firebase.database().ref(`/${role}s/${user.uid}`)
	.set(newUser)
	.then(() => {
		newUser.role = role
		loginUserSuccess(navigation, dispatch, newUser, user.uid)
	})
	.catch(() => loginUserFail(dispatch));
};
