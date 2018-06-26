import React from "react";
import { NavLink } from "react-router-dom";
import githubLogo from "./github-100.png";
import linkedinLogo from "./linkedin-100.png";
import twitterLogo from "./twitter-100.png";
import facebookLogo from "./facebook-100.png";
import "./NavBar.css";

class NavBar extends React.Component {
	render() {
		return (
			<nav className={`mainNav${this.props.fixed ? " mainNav--fixed" : ""}`}>
				<ul className="mainNav__links">
					<li className="mainNav__links__item">
						<NavLink
							to="/my-work"
							className="mainNav__links__item__link"
							activeClassName="is-current"
						>
							My work
						</NavLink>
					</li>
					<li className="mainNav__links__item">
						<NavLink
							to="/about-me"
							className="mainNav__links__item__link"
							activeClassName="is-current"
						>
							About me
						</NavLink>
					</li>
					<li className="mainNav__links__item">
						<NavLink
							to="/contact"
							className="mainNav__links__item__link"
							activeClassName="is-current"
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<ul className="mainNav__social">
					<li className="mainNav__social__icon">
						<a
							href="https://github.com/MikkelSandbag"
							className="mainNav__social__icon__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="mainNav__social__icon__image"
								src={githubLogo}
								alt="github logo"
							/>
						</a>
					</li>
					<li className="mainNav__social__icon">
						<a
							href="https://www.linkedin.com/in/mikkelsandberg/"
							className="mainNav__social__icon__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="mainNav__social__icon__image"
								src={linkedinLogo}
								alt="linkedin logo"
							/>
						</a>
					</li>
					<li className="mainNav__social__icon">
						<a
							href="https://twitter.com/mikkelhsandberg"
							className="mainNav__social__icon__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="mainNav__social__icon__image"
								src={twitterLogo}
								alt="twitter logo"
							/>
						</a>
					</li>
					<li className="mainNav__social__icon">
						<a
							href="https://www.facebook.com/mikkelhsandberg"
							className="mainNav__social__icon__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="mainNav__social__icon__image"
								src={facebookLogo}
								alt="facebook logo"
							/>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;
