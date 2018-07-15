import React, { Component } from 'react';
import WorkImages from '../WorkImages/WorkImages';
import WorkDescription from '../WorkDescription/WorkDescription';
import './WorkDetails.css';
import PropTypes from 'prop-types';

class WorkDetails extends Component {
	componentDidMount() {
		this.props.scrollToTop();
	}

	filteredWork = ({ workData, formatText } = this.props, { workName } = this.props.match.params) => {
		return workData.find(item => {
			let formattedName = `${formatText(item.workLabel)}-${formatText(item.workTitle)}`;
			return formattedName === workName;
		});
	};

	showWork = ({ filteredWork } = this) => {
		if (filteredWork() === undefined) {
			return (
				<section className="workDetails">
					<p>No work to show</p>
				</section>
			);
		} else {
			const { workLabel, workTitle, images, description, skills, links } = filteredWork();
			return (
				<section className="workDetails">
					<WorkImages images={images} workLabel={workLabel} workTitle={workTitle} />
					<WorkDescription
						workTitle={workTitle}
						workLabel={workLabel}
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

WorkDetails.propTypes = {
	scrollToTop: PropTypes.func.isRequired,
	formatText: PropTypes.func.isRequired,
	workData: PropTypes.array.isRequired
};

export default WorkDetails;
