import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './SplashScreen.css';

class SplashScreen extends React.Component {
	render() {
		return (
			<section id="splashScreenWrapper">
				<h1>
					<span>
						<AnchorLink offset="0" href="#myWorkWrapper" onClick={this.props.handleFilterClick} rel="nofollow">
							Web development
						</AnchorLink>
					</span>
					<span>
						<AnchorLink offset="0" href="#myWorkWrapper" onClick={this.props.handleFilterClick} ref="nofollow">
							Podcast production
						</AnchorLink>
					</span>
					<span>Coffee</span>
				</h1>
			</section>
		);
	}
}

export default SplashScreen;
