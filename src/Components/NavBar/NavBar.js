import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

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
	constructor() {
		super();

		this.state = {
			mobileMenuVisible: false
		};
	}

	toggleMobileNav = selector => {
		console.log(selector);
		this.setState(
			prevState => ({
				mobileMenuVisible: !prevState.mobileMenuVisible
			}),
			() => {
				selector.style.transform = `translateX(${
					this.state.mobileMenuVisible ? 0 : "-100%"
				})`;
			}
		);
	};

	render() {
		const { browserWidth, isSticky } = this.props;
		const mobileNavDOM = document.querySelector(".mainNav__links--mobile");

		return (
			<nav className={`mainNav${isSticky ? " mainNav--fixed" : ""}`}>
				{browserWidth <= 700 ? (
					<FontAwesomeIcon
						icon="bars"
						size="2x"
						className="mainNav__mobileMenuIcon"
						onClick={() => this.toggleMobileNav(mobileNavDOM)}
					/>
				) : (
					""
				)}
				{browserWidth > 700 ? <NavLinks isMobile={false} /> : ""}
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
				{browserWidth <= 700 ? <NavLinks isMobile={true} /> : ""}
			</nav>
		);
	}
}

export default NavBar;
