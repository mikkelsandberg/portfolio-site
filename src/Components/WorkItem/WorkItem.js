import React from 'react';
import { Link } from 'react-router-dom';
import './WorkItem.css';
import Parser from 'html-react-parser';
import { FormatText } from '../../Util/HelperFunctions';
import PropTypes from 'prop-types';

const WorkItem = props => {
	const { item } = props;

	return (
		<Link
			to={`/my-work/${FormatText(item.workLabel)}-${FormatText(
				item.workTitle
			)}`}
			className="workItem"
		>
			<div
				className="workItem__image"
				style={{ backgroundImage: `url(${item.images[0].thumbnail})` }}
				alt={`${FormatText(item.workLabel)}-${FormatText(item.workTitle)}`}
			/>
			<div className="workItem__details">
				<p className="workItem__label">{Parser(item.workLabel)}</p>
				<header className="workItem__title">
					<h3 className="workItem__title__text">{Parser(item.workTitle)}</h3>
				</header>
				<article className="workItem__description">
					<p className="workItem__description__text">{Parser(item.summary)}</p>
				</article>
				<footer>
					<ul className="tags">
						{item.tags.map((tag, key = 0) => {
							return (
								<li key={key++} className={`tag tag--${FormatText(tag)}`}>
									<span className="tag__point" />
									<span className="tag__hole" />
									{Parser(tag)}
								</li>
							);
						})}
					</ul>
				</footer>
			</div>
		</Link>
	);
};

WorkItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default WorkItem;
