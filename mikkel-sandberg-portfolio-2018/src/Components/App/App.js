import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SplashScreen from '../SplashScreen/SplashScreen';
import MyWork from '../MyWork/MyWork';
import 'smoothscroll';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<main id="App">
				<NavBar />
				<Switch>
					<Route exact path='/'
						render={() => {
							return (
								<div id="mainContentWrapper">
									<SplashScreen />
									<MyWork />
								</div>
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

export default App;