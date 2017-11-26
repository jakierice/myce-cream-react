import React from 'react';
import { connect } from 'react-redux';
import selectFlavors from '../selectors/flavors';
import {
	setNameFilter,
	sortByRating,
	sortByRetailer
} from '../actions/filters';

export class FlavorListFilters extends React.Component {
	state = {
		calendarFocused: null
	};
	onNameChange = e => {
		this.props.setNameFilter(e.target.value);
	};
	onSelectChange = e => {
		if (e.target.value === 'rating') {
			this.props.sortByRating();
		} else if (e.target.value === 'retailer') {
			this.props.sortByRetailer();
		}
	};

	render() {
		return (
			<div className="input-group input-group--filters">
				<div className="input-group__item">
					<input
						type="text"
						className="text-input"
						placeholder="Search flavors"
						value={this.props.filters.name}
						onChange={this.onNameChange}
					/>
				</div>
				<div className="input-group__item">
					{' '}
					<select
						className="select"
						value={this.props.filters.sortBy}
						onChange={this.onSelectChange}
					>
						<option value="rating">Rating</option>
						<option value="retailer">Retailer</option>
					</select>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filters
});

const mapDispatchToProps = dispatch => ({
	setNameFilter: name => dispatch(setNameFilter(name)),
	sortByRating: () => dispatch(sortByRating()),
	sortByRetailer: () => dispatch(sortByRetailer())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlavorListFilters);
