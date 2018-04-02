import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProviderReducer from './ProviderReducer';

export default combineReducers({
	auth: AuthReducer,
	provider: ProviderReducer
});
