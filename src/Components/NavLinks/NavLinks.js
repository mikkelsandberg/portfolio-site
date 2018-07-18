import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLinks extends Component {
	render() {
		const { hideMobileMenu } = this.props;

		const routes = [
			{
				path: '/',
				name: 'Home',
			},
			{
				path: '/my-work',
				name: 'My Work',
			},
			{
				path: '/about-me',
				name: 'About Me',
			},
			{
				path: '/contact',
				name: 'Contact',
			},
		];

		return (
			<ul className="mainNav__links">
				{routes.map((item, key = 0) => {
					return (
						<li key={key++} className="mainNav__links__item">
							<NavLink
								exact
								to={item.path}
								className="mainNav__links__item__link"
								activeClassName="is-current"
								onClick={hideMobileMenu}
							>
								{item.name}
							</NavLink>
						</li>
					);
				})}
			</ul>
		);
	}
}

NavLinks.propTypes = {
	hideMobileMenu: PropTypes.func.isRequired,
};

export default NavLinks;
