import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProviderReducer from './ProviderReducer';
import ServiceReducer from './ServiceReducer';
import ChatReducer from './ChatReducer';

export default combineReducers({
	auth: AuthReducer,
	provider: ProviderReducer,
	service: ServiceReducer,
	chat: ChatReducer
});
