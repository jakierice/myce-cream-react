import db from '../firebase/firebase';

export const addFlavor = flavor => ({
	type: 'SET_FLAVORS',
	flavor
});

export const startAddFlavor = (flavorData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			name = '',
			note = '',
			retailer = '',
			tasted = false,
			createdAt = 0,
			tastedAt = 0,
			rating = 0
		} = flavorData;

		const flavor = { name, note, retailer, tasted, rating };

		console.log(flavor);

		return db
			.collection('users')
			.doc(uid)
			.collection('flavors')
			.add(flavor)
			.then(docRef =>
				dispatch(
					addFlavor({
						id: docRef.id,
						...flavor
					})
				)
			);
	};
};

export const editFlavor = (id, updates) => ({
	type: 'EDIT_FLAVOR',
	id,
	updates
});

export const startEditFlavor = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return db
			.collection('users')
			.doc(uid)
			.collection('flavors')
			.doc(id)
			.update(updates)
			.then(() => {
				dispatch(editFlavor(id, updates));
			});
	};
};

export const removeFlavor = ({ id } = {}) => ({
	type: 'REMOVE_FLAVOR',
	id
});

export const startRemoveFlavor = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return db
			.collection('users')
			.doc(uid)
			.collection('flavors')
			.doc(id)
			.delete()
			.then(() => {
				dispatch(removeFlavor({ id }));
			});
	};
};

export const setFlavors = flavors => ({
	type: 'SET_FLAVORS',
	flavors
});

export const startSetFlavors = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return db
			.collection('users')
			.doc(uid)
			.collection('flavors')
			.get()
			.then(querySnapshot => {
				const flavors = [];
				querySnapshot.forEach(flavor => {
					flavors.push({
						id: flavor.id,
						...flavor.data()
					});
				});
				dispatch(setFlavors(flavors));
			});
	};
};
