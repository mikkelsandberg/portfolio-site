import React, { Component } from "react";
import { Link } from "react-router-dom";
import StackGrid, { transitions } from "react-stack-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import WorkItem from "../WorkItem/WorkItem";
import "./WorkItems.css";

class WorkItems extends Component {
	render() {
		const { workData, formatText, numItems } = this.props;
		const { fade } = transitions;
		const limitItems = numItems === undefined ? false : true;

		const addWorkItems = () => {
			const workItems = [];
			for (let i = 0; i < (limitItems ? numItems : workData.length); i++) {
				let item = workData[i];
				workItems.push(
					<WorkItem key={item.id} item={item} formatText={formatText} />
				);
			}
			if (limitItems) {
				workItems.push(
					<Link to="/my-work" key="seeAll" className="seeAll__wrapper">
						<p className="seeAll__text">
							See All
							<FontAwesomeIcon
								icon={faArrowCircleRight}
								className="seeAll__icon"
							/>
						</p>
					</Link>
				);
			}
			return workItems;
		};

		return (
			<section className="work__wrapper">
				<StackGrid
					className="work__inner"
					itemComponent="div"
					columnWidth={300}
					gutterWidth={20}
					gutterHeight={20}
					appearDelay={0}
					appear={fade.appear}
					appeared={fade.appeared}
					enter={fade.enter}
					entered={fade.entered}
					leaved={fade.leaved}
				>
					{addWorkItems()}
				</StackGrid>
			</section>
		);
	}
}

export default WorkItems;
