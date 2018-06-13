import firebase from 'firebase';
import {
	SELECT_SERVICE
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
