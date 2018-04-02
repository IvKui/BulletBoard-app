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
