import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import './WorkDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class WorkDescription extends Component {
	render() {
		const {
			workTitle,
			workLabel,
			description,
			skills,
			links,
			currentNum,
			numItems,
			linkToPrev,
			linkToNext,
		} = this.props;

		return (
			<section className="workDetails__info">
				<header className="workDetails__header">
					<h1 className="workDetails__header__label">{Parser(workLabel)}</h1>
					<h2 className="workDetails__header__title">{Parser(workTitle)}</h2>
				</header>
				<article className="workDetails__info__description">
					<p className="workDetails__info__description__text">
						{Parser(description)}
					</p>
				</article>
				<footer className="workDetails__info__footer">
					<ul className="tags">
						{skills.map((skill, key = 0) => {
							return (
								<li key={key++} className="tag">
									<span className="tag__point" />
									<span className="tag__hole" />
									{Parser(skill)}
								</li>
							);
						})}
					</ul>
					<section className="workDetails__info__footer__links">
						{links.map((link, key = 0) => {
							return (
								<p key={key++}>
									<a
										href={Parser(link.url)}
										className="workDetails__info__footer__links__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{Parser(link.title)}
									</a>
								</p>
							);
						})}
					</section>
					<section className="workDetails__info__footer__linkToOtherWork">
						<p>
							<Link
								to={`/my-work/${linkToPrev}`}
								className="workDetails__info__footer__linkToOtherWork__link"
							>
								<FontAwesomeIcon
									icon="arrow-left"
									className="workDetails__info__footer__linkToOtherWork__icon workDetails__info__footer__linkToOtherWork__icon--previous"
								/>Previous
							</Link>
						</p>
						<p>
							{currentNum} of {numItems}
						</p>
						<p>
							<Link
								to={`/my-work/${linkToNext}`}
								className="workDetails__info__footer__linkToOtherWork__link"
							>
								<FontAwesomeIcon
									icon="arrow-right"
									className="workDetails__info__footer__linkToOtherWork__icon workDetails__info__footer__linkToOtherWork__icon--next"
								/>Next
							</Link>
						</p>
					</section>
				</footer>
			</section>
		);
	}
}

WorkDescription.propTypes = {
	workTitle: PropTypes.string.isRequired,
	workLabel: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
	links: PropTypes.array.isRequired,
	currentNum: PropTypes.number.isRequired,
	numItems: PropTypes.number.isRequired,
	linkToPrev: PropTypes.string.isRequired,
	linkToNext: PropTypes.string.isRequired,
};

export default WorkDescription;
