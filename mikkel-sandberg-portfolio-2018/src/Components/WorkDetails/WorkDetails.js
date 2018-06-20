import React, { Component } from "react";
import WorkHeader from "./WorkHeader/WorkHeader";
import WorkImages from "./WorkImages/WorkImages";
import WorkDescription from "./WorkDescription/WorkDescription";
import "./WorkDetails.css";

class WorkDetails extends Component {
	setInitialScroll = () => {
		return window.scroll({ top: 0 });
	};

	componentDidMount() {
		this.setInitialScroll();
	}

	render() {
		const { formatText, workData } = this.props;
		const { workName } = this.props.match.params;
		const filteredWork = () => {
			let workItem = {};
			workData.find(item => {
				let formattedItem = `${formatText(item.workLabel)}-${formatText(
					item.workTitle
				)}`;
				workItem = item;
				return formattedItem === workName;
			});
			return workItem;
		};
		const {
			workLabel,
			workTitle,
			images,
			description,
			skills,
			links
		} = filteredWork();

		return (
			<section className="workDetails">
				<WorkHeader workLabel={workLabel} workTitle={workTitle} />
				<WorkImages
					images={images}
					workLabel={workLabel}
					workTitle={workTitle}
				/>
				<WorkDescription
					description={description}
					skills={skills}
					links={links}
				/>
			</section>
		);
	}
}

export default WorkDetails;
