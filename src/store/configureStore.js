import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import flavorsReducer from '../reducers/flavors';
import filtersReducer from '../reducers/filters';
import uiReducer from '../reducers/ui';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	// Store creation
	const store = createStore(
		combineReducers({
			flavors: flavorsReducer,
			filters: filtersReducer,
			auth: authReducer,
			ui: uiReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
