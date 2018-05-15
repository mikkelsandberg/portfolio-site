import React from 'react';
import './SplashScreen.css';

class SplashScreen extends React.Component {
	render() {
		return (
			<div id="splashScreenWrapper">
				<h1>
					<span>
						<a href="#myWorkWrapper" onClick={this.props.handleFilterClick} rel="nofollow">
							Web development
						</a>
					</span>
					<span>
						<a href="#myWorkWrapper" onClick={this.props.handleFilterClick} ref="nofollow">
							Podcast production
						</a>
					</span>
					<span>Coffee</span>
				</h1>
			</div>
		);
	}
}

export default SplashScreen;
