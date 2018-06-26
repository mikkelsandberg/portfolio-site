import React, { Component } from "react";
import "./Header.css";

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

export default Header;
