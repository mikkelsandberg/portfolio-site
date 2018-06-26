import React, { Component } from "react";
import WorkHeader from "../WorkHeader/WorkHeader";
import WorkImages from "../WorkImages/WorkImages";
import WorkDescription from "../WorkDescription/WorkDescription";
import "./WorkDetails.css";

class WorkDetails extends Component {
	componentDidMount() {
		window.scroll({ top: 0 });
	}

	filteredWork = (
		{ workData, formatText } = this.props,
		{ workName } = this.props.match.params
	) => {
		return workData.find(item => {
			let formattedName = `${formatText(item.workLabel)}-${formatText(
				item.workTitle
			)}`;
			return formattedName === workName;
		});
	};

	showWork = ({ filteredWork } = this) => {
		if (filteredWork() === undefined) {
			return (
				<section className="workDetails">
					<WorkHeader workExists={false} />
					<p>No work to show</p>
				</section>
			);
		} else {
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
					<WorkHeader
						workLabel={workLabel}
						workTitle={workTitle}
						workExists={true}
					/>
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
	};

	render({ showWork } = this) {
		return showWork();
	}
}

export default WorkDetails;
