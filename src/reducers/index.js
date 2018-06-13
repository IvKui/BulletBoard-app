import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProviderReducer from './ProviderReducer';
import ServiceReducer from './ServiceReducer';

export default combineReducers({
	auth: AuthReducer,
	provider: ProviderReducer,
	service: ServiceReducer
});
