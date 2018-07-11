import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import sizeMe from "react-sizeme";
import StickyNav from "../StickyNav/StickyNav";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import SplashScreen from "../SplashScreen/SplashScreen";
import WorkFilters from "../WorkFilters/WorkFilters";
import WorkItems from "../WorkItems/WorkItems";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import WorkDetails from "../WorkDetails/WorkDetails";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import WorkData from "../../Util/WorkData";

library.add(fas, fab);

class App extends Component {
	constructor() {
		super();

		this.state = {
			work: WorkData,
			workFilter: "show-all",
			mobileMenuVisible: false
		};
	}

	componentDidMount() {
		this.filters = document.querySelectorAll(".filters__list .filter");
		this.mainNav = document.querySelector(".mainNav");
	}

	resetWorkFilter = () => {
		this.setState({
			workFilter: "show-all"
		});
	};

	formatText = text =>
		text
			.toLowerCase()
			.replace(/\s/g, "-")
			.replace(/[^a-z\d-]/g, "");

	handleFilterClick = e => {
		this.removeActiveClass();

		this.selectFilter(e);
	};

	removeActiveClass = (filters = this.filters) => {
		filters.forEach(item => {
			item.classList.remove("active");
		});
	};

	selectFilter = e => {
		this.setState(
			{
				workFilter: this.formatText(e.target.innerHTML)
			},
			() => {
				this.iterateThroughFilters();
			}
		);
	};

	iterateThroughFilters = (filters = this.filters) => {
		return filters.forEach(filter => {
			if (this.formatText(filter.innerHTML) === this.state.workFilter) {
				filter.classList.add("active");
			}
		});
	};

	toggleMobileNav = () => {
		const mobileNavDOM = document.querySelector(".mainNav__links--mobile");

		this.setState(
			prevState => ({
				mobileMenuVisible: !prevState.mobileMenuVisible
			}),
			() => {
				mobileNavDOM.style.transform = `translateX(${
					this.state.mobileMenuVisible ? 0 : "-100%"
				})`;
			}
		);
	};

	resetMobileMenu = () => {
		this.setState({
			mobileMenuVisible: false
		});
	};

	render() {
		let filteredWork;
		const browserWidth = this.props.size.width;

		if (this.state.workFilter === "show-all") {
			filteredWork = this.state.work;
		} else {
			filteredWork = this.state.work.filter(item => {
				const tagsStandardized = item.tags.map(tag => {
					return this.formatText(tag);
				});

				return tagsStandardized.includes(this.state.workFilter);
			});
		}

		return (
			<main id="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<div className="homePage">
									<SplashScreen />
									<StickyNav scrollTarget=".splashScreen__wrapper">
										<NavBar
											browserWidth={browserWidth}
											mobileMenuVisible={this.state.mobileMenuVisible}
											toggleMobileNav={this.toggleMobileNav}
											resetMobileMenu={this.resetMobileMenu}
										/>
									</StickyNav>
									<Header text="My Work" />
									<WorkItems
										browserWidth={browserWidth}
										workData={filteredWork}
										formatText={this.formatText}
										numItems={3}
									/>
									<Header text="About Me" />
									<AboutMe />
									<Header text="Contact" />
									<Contact />
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
									<NavBar
										browserWidth={browserWidth}
										isSticky={true}
										mobileMenuVisible={this.state.mobileMenuVisible}
										toggleMobileNav={this.toggleMobileNav}
										resetMobileMenu={this.resetMobileMenu}
									/>
									<section className="contentWrapper">
										<Header text="My Work" />
										<WorkFilters
											activeFilter={this.state.workFilter}
											formatText={this.formatText}
											handleFilterClick={this.handleFilterClick}
										/>
										<WorkItems
											browserWidth={browserWidth}
											workData={filteredWork}
											formatText={this.formatText}
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
									formatText={this.formatText}
									workData={this.state.work}
								/>
							);
						}}
					/>
					<Route
						path="/about-me"
						render={() => {
							return (
								<div>
									<NavBar
										browserWidth={browserWidth}
										isSticky={true}
										mobileMenuVisible={this.state.mobileMenuVisible}
										toggleMobileNav={this.toggleMobileNav}
										resetMobileMenu={this.resetMobileMenu}
									/>
									<section className="contentWrapper">
										<Header text="About Me" />
										<AboutMe />
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
									<NavBar
										browserWidth={browserWidth}
										isSticky={true}
										mobileMenuVisible={this.state.mobileMenuVisible}
										toggleMobileNav={this.toggleMobileNav}
										resetMobileMenu={this.resetMobileMenu}
									/>
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
									<NavBar
										browserWidth={browserWidth}
										isSticky={true}
										mobileMenuVisible={this.state.mobileMenuVisible}
										toggleMobileNav={this.toggleMobileNav}
										resetMobileMenu={this.resetMobileMenu}
									/>
									<section className="contentWrapper">
										<Header text="Uh Oh! This page does not exist :(" />
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
