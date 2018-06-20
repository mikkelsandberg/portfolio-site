import React, { Component } from "react";
import StackGrid, { transitions } from "react-stack-grid";
import WorkItem from "./WorkItem/WorkItem";

class WorkItems extends Component {
	render() {
		const { workData, formatText } = this.props;
		const { fade } = transitions;

		return (
			<section className="work__wrapper">
				<StackGrid
					className="work__inner"
					itemComponent="div"
					columnWidth={480}
					gutterWidth={-1}
					gutterHeight={-1}
					appearDelay={0}
					appear={fade.appear}
					appeared={fade.appeared}
					enter={fade.enter}
					entered={fade.entered}
					leaved={fade.leaved}
				>
					{workData.map(item => {
						return (
							<WorkItem key={item.id} item={item} formatText={formatText} />
						);
					})}
				</StackGrid>
			</section>
		);
	}
}

export default WorkItems;
