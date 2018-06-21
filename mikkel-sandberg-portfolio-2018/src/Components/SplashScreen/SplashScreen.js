import React from "react";
import "./SplashScreen.css";

class SplashScreen extends React.Component {
	render() {
		return (
			<section className="splashScreen__wrapper">
				<h1 className="splashScreen__heading">
					<span className="splashScreen__heading__text">Web development</span>
					<span className="splashScreen__heading__text">
						Podcast production
					</span>
					<span className="splashScreen__heading__text">Coffee</span>
				</h1>
			</section>
		);
	}
}

export default SplashScreen;
