import React, { Component } from 'react';
import WorkItem from './WorkItem/WorkItem';

class WorkItems extends Component {
	render() {
		const { workData, formatText } = this.props;

		return (
			<section id="workItems">
				{workData.map(item => {
					return <WorkItem key={item.id} item={item} formatText={formatText} />;
				})}
			</section>
		);
	}
}

export default WorkItems;
