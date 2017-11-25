export const setNameFilter = (name = '') => ({
	type: 'SET_NAME_FILTER',
	name
});

export const sortByRating = () => ({
	type: 'SORT_BY_RATING'
});

export const sortByRetailer = () => ({
	type: 'SORT_BY_RETAILER'
});
