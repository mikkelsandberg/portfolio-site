import React, { Component } from 'react';
import WorkFilters from './WorkFilters/WorkFilters';
import WorkItems from './WorkItems/WorkItems';
import './MyWork.css';

class MyWork extends Component {
	render() {
		const { handleFilterClick, workData, formatText } = this.props;

		return (
			<section id="myWorkWrapper">
				<header>
					<h2>My work</h2>
				</header>
				<WorkFilters handleFilterClick={handleFilterClick} />
				<WorkItems workData={workData} formatText={formatText} />
			</section>
		);
	}
}

export default MyWork;
