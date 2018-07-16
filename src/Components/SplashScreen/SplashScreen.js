import React, { Component } from 'react';
import './SplashScreen.css';
import PropTypes from 'prop-types';

class SplashScreen extends Component {
	componentDidMount() {
		this.props.setClearOfHeader(false);
	}

	componentWillUnmount() {
		this.props.setClearOfHeader(true);
	}

	render() {
		return (
			<section className="splashScreen__wrapper">
				<h1 className="splashScreen__heading">
					Web Development &<br />
					Podcasting &<br />
					Coffee
				</h1>
			</section>
		);
	}
}

SplashScreen.propTypes = {
	setClearOfHeader: PropTypes.func.isRequired
};

export default SplashScreen;
