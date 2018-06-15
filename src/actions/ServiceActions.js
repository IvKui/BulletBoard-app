import firebase from 'firebase';
import {
	ADD_SERVICE_SELECTED,
	ADD_AVAILABILITY,
	PRICE_TITLE_CHANGED,
	PRICE_AMOUNT_CHANGED,
	ADD_PRICE,
	DAY_CHANGED,
	DAY_START_CHANGED,
	DAY_END_CHANGED,
	ADD_DAY,
	ADD_SERVICE,
	ADD_SERVICE_SUCCESS,
	ADD_SERVICE_FAIL,
	UPDATE_USER_SERVICES
} from './types';

export const getServices = () => {
	return new Promise((resolve, reject) => {
		firebase.database()
			.ref('services/')
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					resolve(snapshot.val())
				}
			})
			.catch(err => {
				reject(err)
			})
	})
}

export const getUserServices = (user) => {
	return new Promise((resolve, reject) => {
		firebase.database()
			.ref(`/${user.role}s/${user.id}/services`)
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					resolve(snapshot.val())
				}
			})
			.catch(err => {
				reject(err)
			})
	})
}

export const getService = (service) => {
	return new Promise((resolve, reject) => {
		firebase.database()
			.ref('services/')
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					let services = []
					service.map(service => {
						services.push(snapshot.val()[service])
					})
					resolve(services)
				}
			})
			.catch(err => {
				reject(err)
			})
	})
}

export const selectAddService = (service) => {
	return {
		type: ADD_SERVICE_SELECTED,
		payload: service
	};
}

export const priceTitleChanged = (text) => {
	return {
		type: PRICE_TITLE_CHANGED,
		payload: text
	};
};

export const priceAmountChanged = (text) => {
	return {
		type: PRICE_AMOUNT_CHANGED,
		payload: text
	};
};

export const addPrice = ({priceTitle, priceAmount, addServicePrices}) => {
	let prices = {}
	if(!addServicePrices) {
		prices[priceTitle] = {
			title: priceTitle,
			amount: priceAmount
		}
	} else {
		prices = addServicePrices
		prices[priceTitle] = {
			title: priceTitle,
			amount: priceAmount
		}
	}

	return {
		type: ADD_PRICE,
		payload: prices
	};
}

export const dayChanged = (text) => {
	return {
		type: DAY_CHANGED,
		payload: text
	};
};

export const dayStartChanged = (text) => {
	return {
		type: DAY_START_CHANGED,
		payload: text
	};
};

export const dayEndChanged = (text) => {
	return {
		type: DAY_END_CHANGED,
		payload: text
	};
};

export const addDay = ({addServiceDays, day, selectedDay, dayStart, dayEnd}) => {
	let days = {}
	if(!addServiceDays) {
		days[selectedDay] = {
			name: day,
			start: dayStart,
			end: dayEnd
		}
	} else {
		days = addServiceDays
		days[selectedDay] = {
			name: day,
			start: dayStart,
			end: dayEnd
		}
	}

	return {
		type: ADD_DAY,
		payload: days
	};
}

export const addService = (navigation, user, addServiceSelected, addServicePrices, addServiceDays) => dispatch => {
	dispatch({ type: ADD_SERVICE });
	firebase.database().ref(`/${user.role}s/${user.id}/services/${addServiceSelected}`)
		.set({
			prices: addServicePrices,
			days: addServiceDays
		})
		.then(() => {
			addServiceSuccess(navigation, dispatch, user)
		})
		.catch((err) => {
			console.log(err)
			addServiceFail(dispatch)
		});
}

const addServiceSuccess = (navigation, dispatch, user) => {
	let newUser = user

	getUserServices(user)
		.then(services => {
			newUser.services = services
			dispatch({
				type: ADD_SERVICE_SUCCESS
			},
			{
				type: UPDATE_USER_SERVICES,
				payload: newUser
			});

			navigation.pop()
		})

};

const addServiceFail = (dispatch) => {
	dispatch({
		type: ADD_SERVICE_FAIL
	});
};
