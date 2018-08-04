import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkImages from '../WorkImages/WorkImages';
import WorkDescription from '../WorkDescription/WorkDescription';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import './WorkDetails.css';
import { FormatText } from '../../Util/HelperFunctions';
import WorkData from '../../Util/WorkData';

function WorkDetails(props) {
	const { workName } = props.match.params;

	function findWorkItem(item, matchItem) {
		let formattedName = `${FormatText(item.workLabel)}-${FormatText(item.workTitle)}`;

		return formattedName === matchItem;
	}

	function getIndexOfWorkItem() {
		let index;

		index = WorkData.findIndex(item => {
			return findWorkItem(item, workName);
		});

		return index;
	}

	function filteredWork() {
		const workItemObj = {
			prev: (getIndexOfWorkItem() + WorkData.length - 1) % WorkData.length,
			current: getIndexOfWorkItem(),
			next: (getIndexOfWorkItem() + 1) % WorkData.length
		};

		return workItemObj;
	}

	function showWork() {
		if (filteredWork().current === -1) {
			return (
				<section className="contentWrapper">
					<Header text="Not Found" />
					<NotFound />
				</section>
			);
		} else {
			const { workLabel, workTitle, images, description, skills, links } = WorkData[filteredWork().current];

			const prevFormatted = `${FormatText(WorkData[filteredWork().prev].workLabel)}-${FormatText(
				WorkData[filteredWork().prev].workTitle
			)}`;

			const nextFormatted = `${FormatText(WorkData[filteredWork().next].workLabel)}-${FormatText(
				WorkData[filteredWork().next].workTitle
			)}`;

			return (
				<section className="workDetails">
					<WorkImages images={images} workLabel={workLabel} workTitle={workTitle} />
					<WorkDescription
						workTitle={workTitle}
						workLabel={workLabel}
						description={description}
						skills={skills}
						links={links}
						currentNum={filteredWork().current + 1}
						numItems={WorkData.length}
						linkToPrev={prevFormatted}
						linkToNext={nextFormatted}
					/>
				</section>
			);
		}
	}

	return showWork();
}

export default withRouter(WorkDetails);
