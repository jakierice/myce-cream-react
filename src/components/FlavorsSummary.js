import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectFlavors from '../selectors/flavors';

const FlavorsSummary = ({ visibleFlavorsCount, totalFlavorsCount }) => {
	const flavorWord = visibleFlavorsCount === 1 ? 'flavor' : 'flavors';
	return <div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{visibleFlavorsCount}</span> out of <span>
						{totalFlavorsCount}
					</span> {flavorWord}
				</h1>
				<div className="page-header_actions">
					<Link className="button" to="/create">
						Add Flavor
					</Link>
				</div>
			</div>
		</div>;
};

const mapStateToProps = state => {
	const visibleFlavors = selectFlavors(state.flavors, state.filters);

	return {
		visibleFlavorsCount: visibleFlavors.length,
		totalFlavorsCount: state.flavors.length
	};
};

export default connect(mapStateToProps)(FlavorsSummary);
