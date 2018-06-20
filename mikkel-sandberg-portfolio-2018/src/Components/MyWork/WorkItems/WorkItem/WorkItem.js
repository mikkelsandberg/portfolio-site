import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkItem.css";

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
				<p className="workItem__label">{item.workLabel}</p>
				<header className="workItem__title">
					<h3 className="workItem__title__text">{item.workTitle}</h3>
				</header>
				<footer>
					<ul className="tags">
						{item.tags.map((tag, key = 0) => {
							return (
								<li key={key++} className={`tag tag--${formatText(tag)}`}>
									<span className="tag__point" />
									<span className="tag__hole" />
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
