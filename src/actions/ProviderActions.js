import firebase from 'firebase';
import {
	SELECTED_PROVIDER,
	SELECTED_PROVIDER_SERVICE
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
