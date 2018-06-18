import firebase from 'firebase';
import {
	SELECT_SERVICE,
	EDIT_SERVICE_ID,
	EDIT_SERVICE_NAME,
	EDIT_SERVICE_PRICES,
	EDIT_SERVICE_DAYS,
	EDIT_PRICES,
	EDIT_DAYS,
	ADD_SERVICE_SELECTED,
	ADD_AVAILABILITY,
	PRICE_TITLE_CHANGED,
	PRICE_AMOUNT_CHANGED,
	ADD_PRICE,
	REMOVE_PRICE,
	REMOVE_EDIT_PRICE,
	DAY_CHANGED,
	DAY_START_CHANGED,
	DAY_END_CHANGED,
	ADD_DAY,
	REMOVE_DAY,
	REMOVE_EDIT_DAY,
	ADD_SERVICE,
	ADD_SERVICE_SUCCESS,
	ADD_SERVICE_FAIL,
	EDIT_SERVICE_SUCCESS,
	EDIT_SERVICE_FAIL,
	DELETE_SERVICE,
	DELETE_SERVICE_SUCCESS,
	DELETE_SERVICE_FAIL,
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
		const id = firebase.auth().currentUser.uid
		firebase.database()
			.ref(`/${user.role}s/${id}/services`)
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

export const selectService = (service) => {
	return {
		type: SELECT_SERVICE,
		payload: service
	};
}

export const editServiceId = (service) => {
	return {
		type: EDIT_SERVICE_ID,
		payload: service
	}
}

export const editServiceName = (name) => {
	return {
		type: EDIT_SERVICE_NAME,
		payload: name
	}
}

export const editServicePrices = (prices) => {
	return {
		type: EDIT_SERVICE_PRICES,
		payload: prices
	}
}

export const editServiceDays = (days) => {
	return {
		type: EDIT_SERVICE_DAYS,
		payload: days
	}
}

export const editPrices = (prices) => {
	return {
		type: EDIT_PRICES,
		payload: prices
	};
}

export const editDays = (days) => {
	return {
		type: EDIT_DAYS,
		payload: days
	};
}

export const editService = (user, editServiceSelected, editServicePrices, editServiceDays) => dispatch => {
	dispatch({ type: ADD_SERVICE });
	const id = firebase.auth().currentUser.uid
	firebase.database().ref(`/${user.role}s/${id}/services/${editServiceSelected}`)
		.set({
			prices: editServicePrices,
			days: editServiceDays
		})
		.then(() => {
			editServiceSuccess(dispatch, user)
		})
		.catch((err) => {
			console.log(err)
			editServiceFail(dispatch)
		});
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

export const removePrice = ({title, addServicePrices}) => {
	let prices = addServicePrices
	delete prices[title]

	return {
		type: REMOVE_PRICE,
		payload: prices
	};
}

export const removeEditPrice = ({title, editServicePrices}) => {
	let prices = editServicePrices
	delete prices[title]

	return {
		type: REMOVE_EDIT_PRICE,
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

export const removeDay = ({day, addServiceDays}) => {
	let days = addServiceDays
	delete days[day]

	return {
		type: REMOVE_DAY,
		payload: days
	};
}

export const removeEditDay = ({day, editServiceDays}) => {
	let days = editServiceDays
	delete days[day]

	return {
		type: REMOVE_EDIT_DAY,
		payload: days
	};
}

export const addService = (navigation, user, addServiceSelected, addServicePrices, addServiceDays) => dispatch => {
	if(addServiceSelected) {
		dispatch({ type: ADD_SERVICE });
		const id = firebase.auth().currentUser.uid
		firebase.database().ref(`/${user.role}s/${id}/services/${addServiceSelected}`)
		.set({
			prices: addServicePrices || 'none',
			days: addServiceDays || 'none'
		})
		.then(() => {
			addServiceSuccess(navigation, dispatch, user)
		})
		.catch((err) => {
			console.log(err)
			addServiceFail(dispatch)
		});
	} else {
		const message = 'Selecteer een dienst'
		addServiceFail(message)
	}
}

export const deleteService = (navigation, user, editServiceSelected) => dispatch => {
	dispatch({ type: DELETE_SERVICE });
	const id = firebase.auth().currentUser.uid
	firebase.database().ref(`/${user.role}s/${id}/services/${editServiceSelected}`)
		.remove()
		.then(() => {
			deleteServiceSuccess(navigation, dispatch, user)
		})
		.catch((err) => {
			console.log(err)
			deleteServiceFail(dispatch)
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

const addServiceFail = (message) => dispatch => {
	dispatch({
		type: ADD_SERVICE_FAIL,
		payload: message
	});
};

const editServiceSuccess = (dispatch, user) => {
	let newUser = user

	getUserServices(user)
		.then(services => {
			newUser.services = services
			dispatch({
				type: EDIT_SERVICE_SUCCESS
			},
			{
				type: UPDATE_USER_SERVICES,
				payload: newUser
			});
		})
};

const editServiceFail = (dispatch) => {
	dispatch({
		type: EDIT_SERVICE_FAIL
	});
};

const deleteServiceSuccess = (navigation, dispatch, user) => {
	let newUser = user

	getUserServices(user)
		.then(services => {
			newUser.services = services
			console.log(user)
			console.log(newUser)
			dispatch({
				type: DELETE_SERVICE_SUCCESS
			},
			{
				type: UPDATE_USER_SERVICES,
				payload: newUser
			});

			navigation.pop()
		})

};

const deleteServiceFail = (dispatch) => {
	dispatch({
		type: DELETE_SERVICE_FAIL
	});
};
