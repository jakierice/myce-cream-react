import React from 'react';
import { connect } from 'react-redux';
import FlavorForm from './FlavorForm';
import { startEditFlavor, startRemoveFlavor } from '../actions/flavors';

export class EditFlavorPage extends React.Component {
	onSubmit = flavor => {
		this.props.startEditFlavor(this.props.flavor.id, flavor);
		this.props.history.push('/');
	};
	onRemove = () => {
		this.props.startRemoveFlavor({ id: this.props.flavor.id });
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Flavor</h1>
					</div>
				</div>
				<div className="content-container">
					<FlavorForm flavor={this.props.flavor} onSubmit={this.onSubmit} />
					<button className="button button--secondary" onClick={this.onRemove}>
						Remove Flavor
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	flavor: state.flavors.find(flavor => flavor.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
	startEditFlavor: (id, flavor) => dispatch(startEditFlavor(id, flavor)),
	startRemoveFlavor: data => dispatch(startRemoveFlavor(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFlavorPage);
