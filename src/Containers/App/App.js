import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import sizeMe from 'react-sizeme';
import RouteChange from '../../Components/RouteChange/RouteChange';
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/Header/Header';
import SplashScreen from '../../Components/SplashScreen/SplashScreen';
import WorkFilters from '../../Components/WorkFilters/WorkFilters';
import WorkItems from '../../Components/WorkItems/WorkItems';
import AboutMe from '../../Components/AboutMe/AboutMe';
// import Contact from '../../Components/Contact/Contact';
import WorkDetails from '../../Components/WorkDetails/WorkDetails';
import NotFound from '../../Components/NotFound/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(fas, fab);

function mapStateToProps(state) {
	return {
		mobileMenuVisible: state.mobileMenuVisible,
	};
}

function App(props) {
	const browserWidth = props.size.width;
	const { mobileMenuVisible } = props;

	return (
		<main
			id="App"
			className={`${browserWidth < 768 ? 'mobileView' : ''}${
				mobileMenuVisible ? ' mobileMenuVisible' : ''
				}`}
		>
			<RouteChange />
			<NavBar
				browserWidth={browserWidth}
				scrollTarget=".splashScreen__wrapper"
			/>
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<div className="homePage">
								<SplashScreen />
								<section className="contentWrapper">
									<Header text="My Work" />
									<WorkItems browserWidth={browserWidth} numItems={3} />
									<Header text="About Me" />
									<AboutMe browserWidth={browserWidth} />
									{/* <Header text="Contact" />
									<Contact /> */}
								</section>
							</div>
						);
					}}
				/>
				<Route
					exact
					path="/my-work"
					render={() => {
						return (
							<section className="contentWrapper">
								<Header text="My Work" />
								<WorkFilters />
								<WorkItems browserWidth={browserWidth} />
							</section>
						);
					}}
				/>
				<Route
					path="/my-work/:workName"
					render={() => {
						return <WorkDetails />;
					}}
				/>
				<Route
					exact
					path="/about-me"
					render={() => {
						return (
							<section className="contentWrapper">
								<Header text="About Me" />
								<AboutMe browserWidth={browserWidth} />
							</section>
						);
					}}
				/>
				{/* <Route
					exact
					path="/contact"
					render={() => {
						return (
							<section className="contentWrapper">
								<Header text="Contact" />
								<Contact />
							</section>
						);
					}}
				/> */}
				<Route
					path="/*"
					render={() => {
						return (
							<section className="contentWrapper">
								<Header text="Not Found" />
								<NotFound />
							</section>
						);
					}}
				/>
			</Switch>
		</main>
	);
}

export default withRouter(connect(mapStateToProps)(sizeMe()(App)));
