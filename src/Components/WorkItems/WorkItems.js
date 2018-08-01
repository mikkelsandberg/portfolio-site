import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackGrid, { transitions } from 'react-stack-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkItem from '../WorkItem/WorkItem';
import './WorkItems.css';
import PropTypes from 'prop-types';

class WorkItems extends Component {
	componentDidMount() {
		this.props.scrollToTop();
	}

	render() {
		const { browserWidth, workData, numItems } = this.props;
		const { fade } = transitions;
		const limitItems = numItems === undefined ? false : true;

		const addWorkItems = () => {
			const workItems = [];

			for (let i = 0; i < (limitItems ? numItems : workData.length); i++) {
				let item = workData[i];
				workItems.push(<WorkItem key={item.id} item={item} />);
			}

			if (limitItems) {
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
			}
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

		return (
			<section className="work__wrapper">{renderDesktopOrMobile()}</section>
		);
	}
}

WorkItems.propTypes = {
	scrollToTop: PropTypes.func.isRequired,
	browserWidth: PropTypes.number.isRequired,
	workData: PropTypes.array.isRequired,
	numItems: PropTypes.number,
};

export default WorkItems;
