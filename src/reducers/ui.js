const uiDefaultReducerState = {
	menu: {
		isOpen: false
	}
};

export default (state = uiDefaultReducerState, action) => {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return {
				...state,
				menu: {
					isOpen: !state.menu.isOpen
				}
			};
		default:
			return state;
	}
};
