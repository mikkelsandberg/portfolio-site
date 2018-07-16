import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, withRouter } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

const socialLinks = [
	{
		link: 'https://github.com/MikkelSandbag',
		icon: ['fab', 'github-square']
	},
	{
		link: 'https://www.linkedin.com/in/mikkelsandberg/',
		icon: ['fab', 'linkedin']
	},
	{
		link: 'https://twitter.com/mikkelhsandberg',
		icon: ['fab', 'twitter-square']
	},
	{
		link: 'https://www.facebook.com/mikkelhsandberg',
		icon: ['fab', 'facebook']
	}
];

class NavBar extends React.Component {
	componentDidMount() {
		if (this.props.scrollTarget !== undefined) {
			this.checkScrollTop();

			window.addEventListener('scroll', () => this.checkScrollTop());
		}
	}

	checkScrollTop = ({ scrollTarget } = this.props, { setClearOfHeader } = this.props) => {
		const scrollTargetElem = document.querySelector(scrollTarget) || null;
		const navBarElem = document.querySelector('.mainNav') || null;

		if (scrollTargetElem !== null && navBarElem !== null) {
			if (window.scrollY >= scrollTargetElem.offsetHeight - navBarElem.offsetHeight) {
				setClearOfHeader(true);
			} else {
				setClearOfHeader(false);
			}
		}
	};

	isWorkItemPage = () => {
		const { pathname } = this.props.location;
		const regex = /^(\/my-work\/.+)/i;

		return regex.test(pathname);
	};

	isMobileView = () => {
		const { browserWidth } = this.props;

		return browserWidth < 768;
	};

	// TODO implement this
	// determineNavItems = () => {
	// 	const { resetMobileMenu } = this.props;
	// 	let renderItems = <div />;

	// 	if (this.isWorkItemPage()) {
	// 		renderItems = (
	// 			<NavLink to="/my-work" class="mainNav__backToMyWork">
	// 				Back to my work
	// 			</NavLink>
	// 		);
	// 		if (this.isMobileView()) {
	// 			renderItems += (
	// 				<div className="mainNav__links__wrapper">
	// 					<NavLinks resetMobileMenu={resetMobileMenu} />
	// 				</div>
	// 			);
	// 		} else {
	// 			renderItems += <NavLinks resetMobileMenu={resetMobileMenu} />;
	// 		}
	// 	}

	// 	return renderItems;
	// };

	render() {
		const { mobileMenuVisible, clearOfHeader, toggleMobileNav, resetMobileMenu } = this.props;

		return (
			<nav
				className={`mainNav${clearOfHeader === false ? ' mainNav--notClear' : ''}${
					mobileMenuVisible === true ? ' mainNav--showMobileMenu' : ''
				}`}
			>
				{this.isMobileView() && !this.isWorkItemPage() ? (
					<div>
						<FontAwesomeIcon icon="bars" size="2x" className="mainNav__mobileMenu__Icon" onClick={toggleMobileNav} />
					</div>
				) : (
					''
				)}
				{this.isWorkItemPage() ? (
					<NavLink to="/my-work" className="mainNav__backToMyWork">
						Back to my work
					</NavLink>
				) : (
					<NavLinks resetMobileMenu={resetMobileMenu} />
				)}

				<ul className="mainNav__social">
					{socialLinks.map((item, key = 0) => {
						return (
							<li key={key++} className="mainNav__social__icon">
								<a href={item.link} className="mainNav__social__icon__link" target="_blank" rel="noopener noreferrer">
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

NavBar.propTypes = {
	browserWidth: PropTypes.number.isRequired,
	mobileMenuVisible: PropTypes.bool.isRequired,
	toggleMobileNav: PropTypes.func.isRequired,
	resetMobileMenu: PropTypes.func.isRequired,
	scrollTarget: PropTypes.string,
	clearOfHeader: PropTypes.bool,
	setClearOfHeader: PropTypes.func
};

export default withRouter(NavBar);
