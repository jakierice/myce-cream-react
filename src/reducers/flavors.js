const flavorsReducerDefaultState = [];

export default (state = flavorsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_FLAVOR':
			return [...state, action.flavor];
		case 'REMOVE_FLAVOR':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_FLAVOR':
			return state.map(flavor => {
				if (flavor.id === action.id) {
					return { ...flavor, ...action.updates };
				} else {
					return flavor;
				}
			});
		case 'SET_FLAVORS':
			return action.flavors;
		default:
			return state;
	}
};
