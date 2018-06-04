import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import githubLogo from './github-100.png';
import linkedinLogo from './linkedin-100.png';
import twitterLogo from './twitter-100.png';
import facebookLogo from './facebook-100.png';
import './NavBar.css';

class NavBar extends React.Component {
	render() {
		return (
			<section id="mainNavWrapper">
				<nav>
					<Scrollspy className="navLinks" items={['myWorkWrapper']} currentClassName="is-current">
						<li>
							<AnchorLink offset="0" href="#myWorkWrapper">
								My work
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset="0" href="/">
								About me
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset="0" href="/">
								Contact
							</AnchorLink>
						</li>
					</Scrollspy>
					<ul id="socialMediaIcons">
						<li id="github">
							<a href="https://github.com/MikkelSandbag" target="_blank" rel="noopener noreferrer">
								<img src={githubLogo} alt="github logo" />
							</a>
						</li>
						<li id="linkedin">
							<a href="https://www.linkedin.com/in/mikkelsandberg/" target="_blank" rel="noopener noreferrer">
								<img src={linkedinLogo} alt="linkedin logo" />
							</a>
						</li>
						<li id="twitter">
							<a href="https://twitter.com/mikkelhsandberg" target="_blank" rel="noopener noreferrer">
								<img src={twitterLogo} alt="twitter logo" />
							</a>
						</li>
						<li id="facebook">
							<a href="https://www.facebook.com/mikkelhsandberg" target="_blank" rel="noopener noreferrer">
								<img src={facebookLogo} alt="facebook logo" />
							</a>
						</li>
					</ul>
				</nav>
			</section>
		);
	}
}

export default NavBar;
