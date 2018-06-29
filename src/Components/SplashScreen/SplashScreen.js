import React from "react";
import "./SplashScreen.css";

class SplashScreen extends React.Component {
	render() {
		return (
			<section className="splashScreen__wrapper">
				<h1 className="splashScreen__heading">
					Web development &<br />
					Podcast production &<br />
					Coffee
				</h1>
			</section>
		);
	}
}

export default SplashScreen;
