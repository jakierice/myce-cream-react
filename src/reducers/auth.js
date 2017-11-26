export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				uid: action.user.uid,
				photo: action.user.photoURL,
				displayName: action.user.displayName
			};
		case 'LOGOUT':
			return {};
		default:
			return state;
	}
};
