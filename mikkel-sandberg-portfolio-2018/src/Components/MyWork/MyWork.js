import React, { Component } from "react";
import WorkFilters from "./WorkFilters/WorkFilters";
import WorkItems from "./WorkItems/WorkItems";

class MyWork extends Component {
	render() {
		const {
			formatText,
			activeFilter,
			workData,
			handleFilterClick
		} = this.props;

		return (
			<section className="mainContentWrapper">
				<header className="header">
					<h1 className="header__text">My Work</h1>
				</header>
				<WorkFilters
					activeFilter={activeFilter}
					formatText={formatText}
					handleFilterClick={handleFilterClick}
				/>
				<WorkItems workData={workData} formatText={formatText} />
			</section>
		);
	}
}

export default MyWork;
