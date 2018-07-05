import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
	render() {
		const { isMobile } = this.props;

		const routes = [
			{
				path: "/",
				name: "Home"
			},
			{
				path: "/my-work",
				name: "My Work"
			},
			{
				path: "/about-me",
				name: "About Me"
			},
			{
				path: "/contact",
				name: "Contact"
			}
		];

		return (
			<ul className={`mainNav__links${isMobile ? "--mobile" : ""}`}>
				{routes.map((item, key = 0) => {
					return (
						<li key={key++} className="mainNav__links__item">
							<NavLink
								exact
								to={item.path}
								className="mainNav__links__item__link"
								activeClassName="is-current"
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

export default NavLinks;
