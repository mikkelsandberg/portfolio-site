import React, { Component } from "react";

class Header extends Component {
	render() {
		const { pageTitle } = this.props;
		return (
			<header className="header">
				<h1 className="header__text">{pageTitle}</h1>
			</header>
		);
	}
}

export default Header;
