import React from 'react';
import Routes from '../../Util/Routes';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = props => {
	const { hideMobileMenu } = props;

	return (
		<ul className="mainNav__links">
			{Routes.map((route, key = 0) => {
				return (
					<li key={key++} className="mainNav__links__item">
						<NavLink
							exact
							to={route.path}
							className="mainNav__links__item__link"
							activeClassName="is-current"
							onClick={hideMobileMenu}
						>
							{route.name}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

NavLinks.propTypes = {
	hideMobileMenu: PropTypes.func.isRequired,
};

export default NavLinks;
