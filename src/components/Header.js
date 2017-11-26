import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header = ({userPhoto, displayName}) => (
	<header className="header">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<span>Myce Cream</span>
				</Link>
				<div className="header__user-info">
					<h3 className="header__user-name">{displayName}</h3>
					<img src={userPhoto} alt="" className="header__user-photo" />
				</div>
			</div>
	</header>
);

const mapStateToProps = (state) => ({
	userPhoto: state.auth.photo,
	displayName: state.auth.displayName
})

export default connect(mapStateToProps)(Header);
