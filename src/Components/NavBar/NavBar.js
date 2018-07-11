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
	// toggleMobileNav = () => {
	// 	const mobileNavDOM = document.querySelector(".mainNav__links--mobile");

	// 	this.setState(
	// 		prevState => ({
	// 			mobileMenuVisible: !prevState.mobileMenuVisible
	// 		}),
	// 		() => {
	// 			mobileNavDOM.style.transform = `translateX(${
	// 				this.state.mobileMenuVisible ? 0 : "-100%"
	// 			})`;
	// 		}
	// 	);
	// };

	render() {
		const {
			browserWidth,
			isSticky,
			toggleMobileNav,
			resetMobileMenu
		} = this.props;

		return (
			<nav className={`mainNav${isSticky ? " mainNav--fixed" : ""}`}>
				{browserWidth < 768 ? (
					<FontAwesomeIcon
						icon="bars"
						size="2x"
						className="mainNav__mobileMenuIcon"
						onClick={toggleMobileNav}
					/>
				) : (
					""
				)}
				{browserWidth >= 768 ? (
					<NavLinks isMobile={false} resetMobileMenu={resetMobileMenu} />
				) : (
					""
				)}
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
				{browserWidth < 768 ? (
					<NavLinks isMobile={true} resetMobileMenu={resetMobileMenu} />
				) : (
					""
				)}
			</nav>
		);
	}
}

export default NavBar;
