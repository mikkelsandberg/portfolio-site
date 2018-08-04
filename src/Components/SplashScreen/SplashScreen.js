import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setClearOfHeader } from '../../actions';
import './SplashScreen.css';

function mapStateToProps(state) {
	return {
		clearOfHeader: state.clearOfHeader
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setClearOfHeaderFalse: () => dispatch(setClearOfHeader(false)),
		setClearOfHeaderTrue: () => dispatch(setClearOfHeader(true))
	};
}

class SplashScreen extends Component {
	componentDidMount({ setClearOfHeaderFalse } = this.props) {
		setClearOfHeaderFalse();
	}

	componentWillUnmount({ setClearOfHeaderTrue } = this.props) {
		setClearOfHeaderTrue();
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
