import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { toggleMenu } from '../actions/ui';
import FlavorListFilters from './FlavorListFilters';

export const Nav = props => (
	<div id="sidebar-nav" className={'nav ' + (props.isOpen ? 'open' : 'closed')}>
		<a onClick={props.toggleMenu} className="nav-close">
			<span>x</span>
		</a>
		<FlavorListFilters className="nav-item" />

		<h2 className="nav__or-tag">OR</h2>
		<Link className="button nav-item" to="/create" onClick={props.toggleMenu}>
			Add Flavor
		</Link>
		<button className="button button--link button--logout" onClick={props.startLogout}>
			Logout
		</button>
	</div>
);

const mapStateToProps = state => ({
	isOpen: state.ui.menu.isOpen
});

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu()),
	startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
