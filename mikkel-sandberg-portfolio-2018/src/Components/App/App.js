import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
import {
	faArrowCircleRight,
	faUser,
	faMapMarkerAlt,
	faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import WorkData from "../../Util/WorkData";

library.add(faArrowCircleRight, faUser, faMapMarkerAlt, faBriefcase, fab);

class App extends Component {
	constructor() {
		super();

		this.state = {
			work: WorkData,
			workFilter: "show-all"
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

	render() {
		let filteredWork;

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
										<NavBar />
									</StickyNav>
									<Header text="My Work" />
									<WorkItems
										workData={filteredWork}
										formatText={this.formatText}
										numItems={3}
									/>
									<Header text="About Me" />
									<AboutMe />
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
									<NavBar isSticky={true} />
									<section className="contentWrapper">
										<Header text="My Work" />
										<WorkFilters
											activeFilter={this.state.workFilter}
											formatText={this.formatText}
											handleFilterClick={this.handleFilterClick}
										/>
										<WorkItems
											workData={filteredWork}
											formatText={this.formatText}
										/>
									</section>
								</div>
							);
						}}
					/>
					<Route
						path="/about-me"
						render={() => {
							return (
								<div>
									<NavBar isSticky={true} />
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
									<NavBar isSticky={true} />
									<Contact />
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
						path="/*"
						render={() => {
							return (
								<div>
									<NavBar isSticky={true} />
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

export default App;
