import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import flavorsReducer from '../reducers/flavors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	// Store creation
	const store = createStore(
		combineReducers({
			auth: authReducer,
			flavors: flavorsReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
