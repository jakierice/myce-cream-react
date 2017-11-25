import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.flavor ? props.flavor.name : '',
			note: props.flavor ? props.flavor.note : '',
			retailer: props.flavor ? props.flavor.retailer : '',
			tasted: props.flavor ? props.flavor.tasted : false,
			// createdAt: props.flavor ? moment(props.flavor.createdAt) : moment(),
			// tastedAt: props.flavor ? moment(props.flavor.tastedAt) : moment(),
			rating: props.flavor ? props.flavor.rating : undefined,
			error: ''
		};
	}
	onNameChange = e => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	};
	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onRetailerChange = e => {
		const retailer = e.target.value;
		this.setState(() => ({ retailer }));
	};
	onTastedChange = e => {
		const tasted = e.target.checked;
		this.setState(() => ({ tasted }));
		console.log(this.state.tasted);
	};
	onRatingChange = e => {
		const rating = e.target.value;

		if (rating >= 0 && rating <= 10) {
			this.setState(() => ({ rating }));
		} else {
			this.setState(() => ({ error: 'Rating must be between 1 and 10' }));
		}
	};
	onSubmit = e => {
		e.preventDefault();

		if (!this.state.name) {
			this.setState(() => ({
				error: 'Please provide a name for the flavor.'
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				name: this.state.name,
				note: this.state.note,
				retailer: this.state.retailer,
				tasted: this.state.tasted,
				rating: this.state.rating
			});
		}
	};
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input
					type="text"
					placeholder="Flavor Name"
					autoFocus
					className="text-input"
					value={this.state.name}
					onChange={this.onNameChange}
				/>
				<input
					type="text"
					placeholder="Retailer"
					className="text-input"
					value={this.state.retailer}
					onChange={this.onRetailerChange}
				/>
				<div className="input-group">
					<div className="input-group__item">
						<label htmlFor="tasted">
							<span>TASTED? </span>
						</label>
						<input
							type="checkbox"
							value="tasted"
							checked={this.state.tasted}
							onChange={this.onTastedChange}
						/>
					</div>
					<div className="input-group__item">
						{this.state.tasted ? (
							<div>
								<span>Rating</span>
								<input
									type="number"
									className="text-input"
									value={this.state.rating}
									onChange={this.onRatingChange}
								/>
							</div>
						) : (
							<p>Rate after tasting!</p>
						)}
					</div>
				</div>
				<div>
					<button className="button">Save Flavor</button>
				</div>
			</form>
		);
	}
}
