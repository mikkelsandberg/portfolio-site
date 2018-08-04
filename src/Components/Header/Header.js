import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

function Header(props) {
	const { text } = props;

	return (
		<header className="header">
			<h1 className="header__text">{text}</h1>
		</header>
	);
}

Header.propTypes = {
	text: PropTypes.string.isRequired
};

export default Header;
