import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StackGrid, { transitions } from 'react-stack-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkItem from '../WorkItem/WorkItem';
import './WorkItems.css';
import { FormatText } from '../../Util/HelperFunctions';
import WorkData from '../../Util/WorkData';
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => ({
	activeFilter: state.workFilter,
});

const WorkItems = props => {
	const { browserWidth, numItems, activeFilter } = props;
	const { fade } = transitions;
	const limitItems = !(numItems === undefined);

	const filterWorkItems = () => {
		let filteredWork;

		if (activeFilter === 'show-all') {
			filteredWork = WorkData;
		} else {
			filteredWork = WorkData.filter(item => {
				const tagsStandardized = item.tags.map(tag => {
					return FormatText(tag);
				});

				return tagsStandardized.includes(activeFilter);
			});
		}

		return filteredWork;
	};

	const iterateThroughWorkItems = (length, inputArray) => {
		const outputArray = [];

		for (let i = 0; i < length; i++) {
			let item = inputArray[i];
			outputArray.push(<WorkItem key={item.id} item={item} />);
		}

		return outputArray;
	};

	const addWorkItems = () => {
		const workItems = [];
		const filteredWork = filterWorkItems();

		if (limitItems) {
			workItems.push(iterateThroughWorkItems(numItems, WorkData));

			workItems.push(
				<Link to="/my-work" key="seeAll" className="seeAll__wrapper">
					<p className="seeAll__text">
						See All
						<FontAwesomeIcon
							icon="arrow-circle-right"
							className="seeAll__icon"
						/>
					</p>
				</Link>
			);

			return workItems;
		}

		workItems.push(iterateThroughWorkItems(filteredWork.length, filteredWork));

		return workItems;
	};

	const renderDesktopOrMobile = () => {
		let output = '';

		if (browserWidth >= 768) {
			output = (
				<StackGrid
					className="work__inner"
					itemComponent="div"
					columnWidth={browserWidth >= 768 ? 300 : '100%'}
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
			);
		} else {
			output = <div className="work__inner">{addWorkItems()}</div>;
		}

		return output;
	};

	return <section className="work__wrapper">{renderDesktopOrMobile()}</section>;
};

WorkItems.propTypes = {
	browserWidth: PropTypes.number.isRequired,
	numItems: PropTypes.number,
};

export default connect(mapStateToProps)(WorkItems);
