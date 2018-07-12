import React from "react";
import NavBar from "../NavBar/NavBar";
import "./SplashScreen.css";

class SplashScreen extends React.Component {
	constructor() {
		super();

		this.state = {
			clearOfHeader: false
		};
	}

	setClearOfHeader = isClear => {
		if (isClear) {
			this.setState({
				clearOfHeader: true
			});
		} else {
			this.setState({
				clearOfHeader: false
			});
		}
	};

	componentWillUnmount() {
		this.setState({
			clearOfHeader: true
		});
	}

	render() {
		const {
			browserWidth,
			mobileMenuVisible,
			toggleMobileNav,
			resetMobileMenu
		} = this.props;

		return (
			<section className="splashScreen__wrapper">
				<NavBar
					browserWidth={browserWidth}
					mobileMenuVisible={mobileMenuVisible}
					toggleMobileNav={toggleMobileNav}
					resetMobileMenu={resetMobileMenu}
					scrollTarget=".splashScreen__wrapper"
					clearOfHeader={this.state.clearOfHeader}
					setClearOfHeader={this.setClearOfHeader}
				/>
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
