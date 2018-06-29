import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

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

const socialLinks = [
	{
		link: "https://github.com/MikkelSandbag",
		icon: ["fab", "github-square"]
	},
	{
		link: "https://www.linkedin.com/in/mikkelsandberg/",
		icon: ["fab", "linkedin"]
	},
	{
		link: "https://twitter.com/mikkelhsandberg",
		icon: ["fab", "twitter-square"]
	},
	{
		link: "https://www.facebook.com/mikkelhsandberg",
		icon: ["fab", "facebook"]
	}
];

class NavBar extends React.Component {
	render() {
		return (
			<nav className={`mainNav${this.props.isSticky ? " mainNav--fixed" : ""}`}>
				<ul className="mainNav__links">
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
				<ul className="mainNav__social">
					{socialLinks.map((item, key = 0) => {
						return (
							<li key={key++} className="mainNav__social__icon">
								<a
									href={item.link}
									className="mainNav__social__icon__link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={item.icon} size="2x" />
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default NavBar;
