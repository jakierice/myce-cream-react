import moment from 'moment';

export default (flavors, { name, sortBy }) => {
	return flavors
		.filter(flavor => {
			const textMatch = flavor.name.toLowerCase().includes(name.toLowerCase());

			return textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'rating') {
				return parseInt(a.rating) < parseInt(b.rating) ? 1 : -1;
			}

			if (sortBy === 'retailer') {
				if (a.retailer === '') {
					return 1;
				} else if (b.retailer === '') {
					return -1;
				} else {
					return a.retailer < b.retailer ? -1 : a.retailer > b.retailer ? 1 : 0;
				}
			}
		});
};
