import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { toggleMenu } from '../actions/ui';

export const PrivateRoute = ({
	isAuthenticated,
	toggleMenu,
	component: Component,
	...rest
}) => (
	<Route
		{...rest}
		component={props =>
			isAuthenticated ? (
				<div>
					<Header />
					<Nav />
					<div className="main">
						<Component {...props} />
					</div>
					<a onClick={toggleMenu}>
						<img
							src="/images/ice_cream.png"
							className="ice-cream-logo"
							alt=""
						/>
					</a>
				</div>
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

const mapStateToProps = state => ({
	isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
