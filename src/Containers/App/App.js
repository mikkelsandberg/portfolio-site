import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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

class App extends Component {
	constructor() {
		super();

		this.state = {
			mobileMenuVisible: false,
			clearOfHeader: true,
		};
	}

	scrollToTop = () => {
		window.scroll({ top: 0 });
	};

	toggleMobileNav = () => {
		this.setState(prevState => ({
			mobileMenuVisible: !prevState.mobileMenuVisible,
		}));
	};

	hideMobileMenu = () => {
		if (this.props.size.width < 768) {
			this.setMobileMenuVisible(false);
		}
	};

	setMobileMenuVisible = isMobileMenuVisible => {
		if (isMobileMenuVisible) {
			this.setState({
				mobileMenuVisible: true,
			});
		} else {
			this.setState({
				mobileMenuVisible: false,
			});
		}
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
		const { mobileMenuVisible } = this.state;

		return (
			<main
				id="App"
				className={`${browserWidth < 768 ? 'mobileView' : ''}${
					mobileMenuVisible ? ' mobileMenuVisible' : ''
				}`}
			>
				<NavBar
					browserWidth={browserWidth}
					toggleMobileNav={this.toggleMobileNav}
					hideMobileMenu={this.hideMobileMenu}
					scrollTarget=".splashScreen__wrapper"
					clearOfHeader={this.state.clearOfHeader}
					setClearOfHeader={this.setClearOfHeader}
				/>
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<div className="homePage">
									<SplashScreen setClearOfHeader={this.setClearOfHeader} />
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

export default sizeMe()(App);
