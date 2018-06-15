import React, { Component } from "react";
import { withLastLocation } from "react-router-last-location";
import WorkFilters from "./WorkFilters/WorkFilters";
import WorkItems from "./WorkItems/WorkItems";
import "./MyWork.css";

class MyWork extends Component {
	componentDidMount() {
		console.log("lastLocation", this.props.lastLocation);
		if (this.props.lastLocation !== null) {
			this.props.scrollToSection("myWorkWrapper");
		}
	}

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

export default withLastLocation(MyWork);
