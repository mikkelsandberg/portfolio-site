import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SplashScreen from '../SplashScreen/SplashScreen';
import MyWork from '../MyWork/MyWork';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path='/'
						render={() => {
							return (
								<SplashScreen />
							);
						}}
					/>
					<Route exact path='/my-work'
						render={() => {
							return (
								<MyWork />
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;