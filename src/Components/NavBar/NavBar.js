import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMobileMenuVisible, setMobileMenuVisible, setClearOfHeader } from '../../actions';
import NavLinks from '../NavLinks/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, withRouter } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
	return {
		mobileMenuVisible: state.mobileMenuVisible,
		clearOfHeader: state.clearOfHeader
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleMobileMenu: e => dispatch(toggleMobileMenuVisible(e)),
		hideMobileMenu: () => dispatch(setMobileMenuVisible(false)),
		setClearOfHeaderFalse: () => dispatch(setClearOfHeader(false)),
		setClearOfHeaderTrue: () => dispatch(setClearOfHeader(true))
	};
}

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

class NavBar extends Component {
	componentDidMount() {
		if (this.props.scrollTarget !== undefined) {
			this.checkScrollTop();

			window.addEventListener('scroll', () => this.checkScrollTop());
		}
	}

	checkScrollTop = ({ scrollTarget, setClearOfHeaderTrue, setClearOfHeaderFalse } = this.props) => {
		const scrollTargetElem = document.querySelector(scrollTarget) || null;
		const navBarElem = document.querySelector('.mainNav') || null;

		if (scrollTargetElem !== null && navBarElem !== null) {
			if (window.scrollY >= scrollTargetElem.offsetHeight - navBarElem.offsetHeight) {
				setClearOfHeaderTrue();
			} else {
				setClearOfHeaderFalse();
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

	isNotFoundPage = () => {
		const { pathname } = this.props.location;
		const onNotFoundPage = Boolean(
			pathname !== '/' && pathname !== '/my-work' && pathname !== '/about-me' && pathname !== '/contact'
		);

		if (onNotFoundPage) {
			return true;
		}
	};

	determineNavItems = () => {
		const { hideMobileMenu, toggleMobileMenu } = this.props;
		const renderItems = [];

		function addMobileNavLinks(key = 0) {
			return (
				<div key={key++}>
					<FontAwesomeIcon
						key={key++}
						icon="bars"
						size="2x"
						className="mainNav__mobileMenu__Icon"
						onClick={toggleMobileMenu}
					/>
					<div key={key++} className="mainNav__links__wrapper">
						<NavLinks key={key++} hideMobileMenu={hideMobileMenu} />
					</div>
				</div>
			);
		}

		function addDesktopNavLinks(key = 0) {
			return <NavLinks key={key++} hideMobileMenu={hideMobileMenu} />;
		}

		if (this.isWorkItemPage()) {
			renderItems.push(
				<NavLink key={0} to="/my-work" className="mainNav__backToMyWork">
					Back to my work
				</NavLink>
			);
		} else if (this.isNotFoundPage()) {
			return renderItems;
		} else {
			if (this.isMobileView()) {
				renderItems.push(addMobileNavLinks());
			} else {
				renderItems.push(addDesktopNavLinks());
			}
		}

		return renderItems;
	};

	render() {
		const { clearOfHeader } = this.props;

		return (
			<nav className={`mainNav${clearOfHeader === false ? ' mainNav--notClear' : ''}`}>
				{this.determineNavItems()}

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
	scrollTarget: PropTypes.string.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
