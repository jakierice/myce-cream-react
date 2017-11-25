import React from 'react';
import { connect } from 'react-redux';
import FlavorListItem from './FlavorListItem';

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
					<span>No flavors yet!</span>
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
	flavors: state.flavors
});

export default connect(mapStateToProps)(FlavorList);
