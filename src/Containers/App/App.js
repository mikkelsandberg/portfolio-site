import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import sizeMe from 'react-sizeme';
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/Header/Header';
import SplashScreen from '../../Components/SplashScreen/SplashScreen';
import WorkFilters from '../../Components/WorkFilters/WorkFilters';
import WorkItems from '../../Components/WorkItems/WorkItems';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Contact from '../../Components/Contact/Contact';
import WorkDetails from '../../Components/WorkDetails/WorkDetails';
import NotFound from '../../Components/NotFound/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(fas, fab);

const mapStateToProps = state => ({
	mobileMenuVisible: state.mobileMenuVisible,
});

class App extends Component {
	constructor() {
		super();

		this.state = {
			clearOfHeader: true,
		};
	}

	scrollToTop = () => {
		window.scroll({ top: 0 });
	};

	setClearOfHeader = isClear => {
		if (isClear) {
			this.setState({
				clearOfHeader: true,
			});
		} else {
			this.setState({
				clearOfHeader: false,
			});
		}
	};

	render() {
		const browserWidth = this.props.size.width;
		const { mobileMenuVisible } = this.props;

		return (
			<main
				id="App"
				className={`${browserWidth < 768 ? 'mobileView' : ''}${
					mobileMenuVisible ? ' mobileMenuVisible' : ''
				}`}
			>
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
										<Header text="Contact" />
										<Contact />
									</section>
								</div>
							);
						}}
					/>
					<Route
						exact
						path="/my-work"
						onEnter={() => this.scrollToTop}
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
						onEnter={() => this.scrollToTop}
						render={props => {
							return <WorkDetails {...props} />;
						}}
					/>
					<Route
						exact
						path="/about-me"
						onEnter={() => this.scrollToTop}
						render={() => {
							return (
								<section className="contentWrapper">
									<Header text="About Me" />
									<AboutMe browserWidth={browserWidth} />
								</section>
							);
						}}
					/>
					<Route
						exact
						path="/contact"
						onEnter={() => this.scrollToTop}
						render={() => {
							return (
								<section className="contentWrapper">
									<Header text="Contact" />
									<Contact />
								</section>
							);
						}}
					/>
					<Route
						path="/*"
						onEnter={() => this.scrollToTop}
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
}

export default withRouter(connect(mapStateToProps)(sizeMe()(App)));
