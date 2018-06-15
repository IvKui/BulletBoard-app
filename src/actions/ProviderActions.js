import firebase from 'firebase';
import {
	PROVIDER_SELECTED
} from './types';

export const providerSelected = (name, image) => {
	return {
		type: PROVIDER_SELECTED,
		payload: name, image
	};
};

export const getProviders = (service) => {
	return new Promise((resolve, reject) => {
		firebase.database()
			.ref('providers')
			.once('value')
			.then(snapshot => {
				if(snapshot.val()) {
					const providers = snapshot.val()
					let res = []
					Object.values(providers).map(provider => {
						if(service) {
							if(provider.services){
								if(provider.services[service]) {
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
