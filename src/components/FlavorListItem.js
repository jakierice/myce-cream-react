import React from 'react';
import { Link } from 'react-router-dom';

const FlavorListItem = ({ id, name, tasted, retailer, note, rating }) => (
	<Link className="list-item" to={`/edit/${id}`}>
		<div>
			<h2 className="list-item__title">{name}</h2>
			<span className="list-item__sub-title">{retailer}</span>
		</div>
		<div>
			<h3
				className={
					'list-item__data ' +
					(rating ? 'list-item__data-rating' : 'list-item__data-status')
				}
			>
				{rating ? rating : tasted ? 'NEEDS RATING' : 'NEED TO TASTE'}
			</h3>
		</div>
	</Link>
);

export default FlavorListItem;
