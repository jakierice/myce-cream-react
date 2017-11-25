const filtersReducerDefaultState = {
	name: '',
	sortBy: 'rating'
};

export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_NAME_FILTER':
			return { ...state, name: action.name };
		case 'SORT_BY_RATING':
			return { ...state, sortBy: 'rating' };
		case 'SORT_BY_RETAILER':
			return { ...state, sortBy: 'retailer' };
		default:
			return state;
	}
};
