import firebase from 'firebase';
import {
	SELECTED_PROVIDER,
	SELECTED_PROVIDER_SERVICE,
	GET_PROVIDER,
	GET_PROVIDER_SUCCESS,
	GET_PROVIDER_FAIL
} from './types';

export const getProviders = (service) => {
	return new Promise((resolve, reject) => {
		firebase.database()
			.ref('users/providers')
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					const providers = snapshot.val()
					let res = []
					Object.values(providers).map(provider => {
						if(service) {
							if(provider.services){
								if(provider.services[service.id]) {
									res.push(provider)
								}
							}
						} else {
							res.push(provider)
						}
					})
					resolve(res)
				} else {
					reject()
				}
			})
			.catch((err) => {
				reject(err)
			})
	})
}

export const getProvider = providerId => dispatch => {
	dispatch({type: GET_PROVIDER})
	firebase.database()
		.ref(`users/providers/${providerId}`)
		.on('value', snapshot => {
			if(snapshot.val()) {
				dispatch({type: GET_PROVIDER_SUCCESS, payload: snapshot.val()})
			} else {
				dispatch({type: GET_PROVIDER_FAIL})
			}
		})
}

export const selectProvider = (provider) => {
	return {
		type: SELECTED_PROVIDER,
		payload: provider
	};
};

export const selectProviderService = (providerService) => {
	return {
		type: SELECTED_PROVIDER_SERVICE,
		payload: providerService
	};
};
