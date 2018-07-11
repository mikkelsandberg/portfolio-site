import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkItem.css";

class WorkItem extends Component {
	render() {
		const { item, formatText } = this.props;

		return (
			<Link
				to={`/my-work/${formatText(item.workLabel)}-${formatText(
					item.workTitle
				)}`}
				className="workItem"
			>
				<div
					className="workItem__image"
					style={{ backgroundImage: `url(${item.images[0].url})` }}
					alt={`${formatText(item.workLabel)}-${formatText(item.workTitle)}`}
				/>
				<div className="workItem__details">
					<p className="workItem__label">{item.workLabel}</p>
					<header className="workItem__title">
						<h3 className="workItem__title__text">{item.workTitle}</h3>
					</header>
					<article className="workItem__description">
						<p className="workItem__description__text">
							{`${item.description
								.split(/\s+/)
								.slice(0, 20)
								.join(" ")}...`}
						</p>
					</article>
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
				</div>
			</Link>
		);
	}
}

export default WorkItem;
