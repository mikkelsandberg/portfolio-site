import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SplashScreen from '../SplashScreen/SplashScreen';
import MyWork from '../MyWork/MyWork';
import './App.css';
import WorkData from '../../Util/WorkData';

class App extends Component {
	constructor() {
		super();

		this.state = {
			work: WorkData,
			workFilter: 'show-all'
		};
	}

	componentDidMount() {
		this.filters = document.querySelectorAll('#myWorkWrapper nav ul li');
	}

	formatText = text => text.toLowerCase().replace(/\s/g, '-');

	handleFilterClick = e => {
		this.removeActiveClass();

		this.selectFilter(e);
	};

	removeActiveClass = (filters = this.filters) => {
		filters.forEach(item => {
			item.classList.remove('active');
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
				filter.classList.add('active');
			}
		});
	};

	render() {
		let filteredWork;

		if (this.state.workFilter === 'show-all') {
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
				<NavBar />
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<div id="mainContentWrapper">
									<SplashScreen handleFilterClick={this.handleFilterClick} />
									<MyWork workData={filteredWork} handleFilterClick={this.handleFilterClick} />
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
