import React, { Component } from "react";
import Filters from "../../../Util/Filters";

class WorkFilters extends Component {
	render() {
		const { activeFilter, formatText, handleFilterClick } = this.props;

		return (
			<nav>
				<ul>
					{Filters.map(filter => {
						return (
							<li
								key={filter.id}
								onClick={handleFilterClick}
								className={`${
									activeFilter === formatText(filter.name) ? "active" : ""
								} filterTab_${filter.color}Color`}
							>
								{filter.name}
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default WorkFilters;
