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
	componentDidMount() {
		if (this.props.scrollTarget !== undefined) {
			this.checkScrollTop();

			window.addEventListener("scroll", () => this.checkScrollTop());
		}
	}

	checkScrollTop = (
		{ scrollTarget } = this.props,
		{ setClearOfHeader } = this.props
	) => {
		const scrollTargetElem = document.querySelector(scrollTarget) || null;
		const navBarElem = document.querySelector(".mainNav") || null;

		if (scrollTargetElem !== null && navBarElem !== null) {
			if (
				window.scrollY >=
				scrollTargetElem.offsetHeight - navBarElem.offsetHeight
			) {
				setClearOfHeader(true);
			} else {
				setClearOfHeader(false);
			}
		}
	};

	render() {
		const {
			browserWidth,
			mobileMenuVisible,
			clearOfHeader,
			toggleMobileNav,
			resetMobileMenu
		} = this.props;

		return (
			<nav
				className={`mainNav${
					clearOfHeader === false ? " mainNav--notClear" : ""
				}${browserWidth < 768 ? " mainNav--mobile" : ""}${
					mobileMenuVisible === true ? " mainNav--showMobileMenu" : ""
				}`}
			>
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
				<NavLinks resetMobileMenu={resetMobileMenu} />
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
