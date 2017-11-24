import authReducer from '../../reducers/auth';

test('should set uid for login user', () => {
	const uid = 'af98j2938j0a';
	const action = {
		type: 'LOGIN',
		uid
	};

	const state = authReducer(uid, action);
	expect(state.uid).toEqual(uid);
});

test('should clear uid logout user', () => {
	const action = {
		type: 'LOGOUT'
	};

	const state = authReducer({ uid: 'anything' }, action);
	expect(state).toEqual({});
});
