import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import WorkItem from "./WorkItem/WorkItem";

class WorkItems extends Component {
	render() {
		const { workData, formatText } = this.props;

		return (
			<section id="workItems">
				<ReactCSSTransitionGroup
					component="div"
					id="workItemsInner"
					transitionName="workItems"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{workData.map(item => {
						return (
							<WorkItem key={item.id} item={item} formatText={formatText} />
						);
					})}
				</ReactCSSTransitionGroup>
			</section>
		);
	}
}

export default WorkItems;
