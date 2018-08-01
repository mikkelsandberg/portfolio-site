import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import sizeMe from 'react-sizeme';
import NavBar from '../Components/NavBar/NavBar';
import Header from '../Components/Header/Header';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import WorkFilters from '../Components/WorkFilters/WorkFilters';
import WorkItems from '../Components/WorkItems/WorkItems';
import AboutMe from '../Components/AboutMe/AboutMe';
import Contact from '../Components/Contact/Contact';
import WorkDetails from '../Components/WorkDetails/WorkDetails';
import NotFound from '../Components/NotFound/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import WorkData from '../Util/WorkData';
import { FormatText } from '../Util/HelperFunctions';

library.add(fas, fab);

class App extends Component {
	constructor() {
		super();

		this.state = {
			workFilter: 'show-all',
			mobileMenuVisible: false,
			clearOfHeader: true,
		};
	}

	componentDidMount() {
		this.filters = document.querySelectorAll('.filters__list .filter');
		this.bodySelector = document.querySelector('body');
	}

	scrollToTop = () => {
		window.scroll({ top: 0 });
	};

	resetWorkFilter = () => {
		this.setState({
			workFilter: 'show-all',
		});
	};

	removeActiveClass = (filters = this.filters) => {
		filters.forEach(item => {
			item.classList.remove('active');
		});
	};

	selectFilter = e => {
		this.setState(
			{
				workFilter: FormatText(e.target.innerHTML),
			},
			() => {
				this.removeActiveClass();
				this.iterateThroughFilters();
			}
		);
	};

	iterateThroughFilters = (filters = this.filters) => {
		return filters.forEach(filter => {
			if (FormatText(filter.innerHTML) === this.state.workFilter) {
				filter.classList.add('active');
			}
		});
	};

	handleFilterClick = e => {
		this.selectFilter(e);
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
		let filteredWork;
		const browserWidth = this.props.size.width;
		const { mobileMenuVisible } = this.state;

		if (this.state.workFilter === 'show-all') {
			filteredWork = WorkData;
		} else {
			filteredWork = WorkData.filter(item => {
				const tagsStandardized = item.tags.map(tag => {
					return FormatText(tag);
				});

				return tagsStandardized.includes(this.state.workFilter);
			});
		}

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
										<WorkItems
											scrollToTop={this.scrollToTop}
											browserWidth={browserWidth}
											workData={filteredWork}
											numItems={3}
										/>
										<Header text="About Me" />
										<AboutMe
											scrollToTop={this.scrollToTop}
											browserWidth={browserWidth}
										/>
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
						render={() => {
							return (
								<div>
									<section className="contentWrapper">
										<Header text="My Work" />
										<WorkFilters
											activeFilter={this.state.workFilter}
											handleFilterClick={this.handleFilterClick}
										/>
										<WorkItems
											scrollToTop={this.scrollToTop}
											browserWidth={browserWidth}
											workData={filteredWork}
										/>
									</section>
								</div>
							);
						}}
					/>
					<Route
						path="/my-work/:workName"
						render={props => {
							return (
								<WorkDetails
									{...props}
									scrollToTop={this.scrollToTop}
									workData={WorkData}
								/>
							);
						}}
					/>
					<Route
						path="/about-me"
						render={() => {
							return (
								<div>
									<section className="contentWrapper">
										<Header text="About Me" />
										<AboutMe
											scrollToTop={this.scrollToTop}
											browserWidth={browserWidth}
										/>
									</section>
								</div>
							);
						}}
					/>
					<Route
						path="/contact"
						render={() => {
							return (
								<div>
									<section className="contentWrapper">
										<Header text="Contact" />
										<Contact />
									</section>
								</div>
							);
						}}
					/>
					<Route
						path="/*"
						render={() => {
							return (
								<div>
									<section className="contentWrapper">
										<Header text="Not Found" />
										<NotFound />
									</section>
								</div>
							);
						}}
					/>
				</Switch>
			</main>
		);
	}
}

export default sizeMe()(App);
