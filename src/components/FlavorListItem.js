import React from 'react';
import { Link } from 'react-router-dom';

const FlavorListItem = ({ id, name, tasted, retailer, note, rating }) => (
	<Link className="list-item" to={`/edit/${id}`}>
		<div>
			<h2 className="list-item__title">{name}</h2>
			<span className="list-item__sub-title">{retailer}</span>
		</div>
		<h3 className="list-item__data">{tasted ? 'TASTED' : 'NEED TO TASTE'}</h3>
	</Link>
);

export default FlavorListItem;
