import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.flavor ? props.flavor.name : '',
			note: props.flavor ? props.flavor.note : '',
			retailer: props.flavor ? props.flavor.retailer : '',
			tasted: props.flavor ? props.flavor.tasted : false,
			tastedAt: props.flavor ? moment(props.flavor.tastedAt) : moment(),
			rating: props.flavor ? props.flavor.rating : undefined,
			calendarFocused: false,
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
		const tasted = this.state.tasted;
		this.setState(() => ({ tasted: !tasted }));

		if (!tasted) {
			this.setState(() => ({ rating: 0 }));
		}
	};
	onDateChange = tastedAt => {
		if (tastedAt) {
			this.setState(() => ({ tastedAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({
			calendarFocused: focused
		}));
	};
	onRatingChange = e => {
		const rating = parseInt(e.target.value);

		if (rating >= 0 && rating <= 10) {
			this.setState(() => ({ rating }));
		} else {
			this.setState(() => ({
				error: 'Rating must be between 1 and 10'
			}));
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
				tastedAt: this.state.tasted ? this.state.tastedAt.valueOf() : '',
				rating: this.state.rating
			});
		}
	};
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<div className="input-group">
					<div className="input-group__item">
						<h3 className="input-group__item-label">Flavor Name</h3>
						<input
							type="text"
							placeholder="Flavor Name"
							autoFocus
							className="text-input"
							value={this.state.name}
							onChange={this.onNameChange}
						/>
					</div>
					<div className="input-group__item">
						<h3 className="input-group__item-label">Retailer</h3>
						<input
							type="text"
							placeholder="Retailer"
							className="text-input"
							value={this.state.retailer}
							onChange={this.onRetailerChange}
						/>
					</div>
				</div>
				<div className="tasted-form-section">
					<div className="tasted-input">
						<h3 className="tasted-checkbox-label">Tasted?</h3>
						<div
							className={
								'tasted-checkbox ' +
								(this.state.tasted
									? 'tasted-checkbox--checked'
									: 'tasted-checkbox--unchecked')
							}
							onClick={this.onTastedChange}
						>
							<img src="/images/checkmark.png" className="checkmark" alt="" />
						</div>
					</div>

					{this.state.tasted ? (
						<div className="input-group input-group--tasted">
							<div className="input-group__item">
								<h3 className="input-group__item-label">Tasted On</h3>
								<SingleDatePicker
									date={this.state.tastedAt}
									onDateChange={
										this.onDateChange // momentPropTypes.momentObj or null
									}
									focused={
										this.state.calendarFocused // PropTypes.func.isRequired
									}
									onFocusChange={
										this.onFocusChange // PropTypes.bool
									}
									numberOfMonths={
										1 // PropTypes.func.isRequired
									}
									isOutsideRange={day => false}
								/>
							</div>
							<div className="input-group__item">
								<h3 className="input-group__item-label">Rating</h3>
								<input
									type="number"
									className="number"
									value={this.state.rating}
									onChange={this.onRatingChange}
								/>
							</div>
						</div>
					) : (
						<h3 className="input-group__error">You can rate this flavor after you have tasted it!</h3>
					)}
				</div>

				<div>
					<button className="button">Save Flavor</button>
				</div>
			</form>
		);
	}
}
