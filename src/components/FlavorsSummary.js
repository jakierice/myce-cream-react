import React from 'react';
import { Link } from 'react-router-dom';

const FlavorsSummary = () => (
	<div className="page-header">
		<div className="content-container">
			<Link className="header__title" to="/create">
				<button className="button">Add Flavor</button>
			</Link>
		</div>
	</div>
);

export default FlavorsSummary;
