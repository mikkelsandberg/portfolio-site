import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkItem.css';

class WorkItem extends Component {
	render() {
		const { item, formatText } = this.props;

		return (
			<Link
				id={`${formatText(item.workLabel)}-${formatText(item.workTitle)}`}
				to={`/${formatText(item.workLabel)}-${formatText(item.workTitle)}`}
				className="workItem"
				style={{ backgroundImage: `url(${item.images[0].url})` }}
			>
				<p className="workLabel">{item.workLabel}</p>
				<header>
					<h3>{item.workTitle}</h3>
				</header>
				<footer>
					<ul id="tags">
						{item.tags.map((tag, key = 0) => {
							return (
								<li key={key++} className={formatText(tag)}>
									<span className="tagPoint" />
									<span className="tagHole" />
									{tag}
								</li>
							);
						})}
					</ul>
				</footer>
			</Link>
		);
	}
}

export default WorkItem;
