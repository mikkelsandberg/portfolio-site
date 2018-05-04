import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashScreen.css';

class SplashScreen extends React.Component {
	render() {
		return (
			<div>
				<h1><NavLink exact to='/my-work'>Web development</NavLink><br/>+<br/>Podcasting<br/>+<br/>Coffee</h1>
			</div>
		);
	}
}

export default SplashScreen;