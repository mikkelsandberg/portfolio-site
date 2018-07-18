import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		const { text } = this.props;
		return (
			<header className="header">
				<h1 className="header__text">{text}</h1>
			</header>
		);
	}
}

Header.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Header;
