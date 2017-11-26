import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FlavorListItem from './FlavorListItem';
import selectFlavors from '../selectors/flavors';

const FlavorList = props => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Flavors</div>
			<div className="show-for-desktop">Flavor</div>
			<div className="show-for-desktop">Status</div>
		</div>
		<div className="list-body">
			{props.flavors.length === 0 ? (
				<div className="list-item list-item--message">
					<h3>No flavors yet!</h3 >
					<Link to="/create" className="button">
						Add Flavor
					</Link>
				</div>
			) : (
				props.flavors.map(flavor => {
					return <FlavorListItem key={flavor.id} {...flavor} />;
				})
			)}
		</div>
	</div>
);

const mapStateToProps = state => ({
	flavors: selectFlavors(state.flavors, state.filters)
});

export default connect(mapStateToProps)(FlavorList);
