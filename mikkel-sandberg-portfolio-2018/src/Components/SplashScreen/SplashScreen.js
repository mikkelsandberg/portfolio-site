import React from 'react';
import './SplashScreen.css';

class SplashScreen extends React.Component {
	render() {
		return (
			<div id="splashScreenWrapper">
				<h1><span><a href="#myWorkWrapper" rel="nofollow">Web development</a></span><span><a href="#myWorkWrapper" ref="nofollow">Podcasting</a></span><span>Coffee</span></h1>
			</div>
		);
	}
}

export default SplashScreen;