import React from 'react';
import { connect } from 'react-redux';
import FlavorForm from './FlavorForm';
import { startAddFlavor } from '../actions/flavors';

export class AddFlavorPage extends React.Component {
	onSubmit = flavor => {
		this.props.startAddFlavor(flavor);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Flavor</h1>
					</div>
				</div>
				<div className="content-container">
					<FlavorForm onSubmit={this.onSubmit} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	startAddFlavor: flavor => dispatch(startAddFlavor(flavor))
});

export default connect(undefined, mapDispatchToProps)(AddFlavorPage);
