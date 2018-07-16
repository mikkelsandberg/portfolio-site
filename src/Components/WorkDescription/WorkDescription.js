import React, { Component } from 'react';
import './WorkDescription.css';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

class WorkDescription extends Component {
	render() {
		const { workTitle, workLabel, description, skills, links } = this.props;

		return (
			<section className="workDetails__info">
				<header className="workDetails__header">
					<h1 className="workDetails__header__label">{workLabel}</h1>
					<h2 className="workDetails__header__title">{workTitle}</h2>
				</header>
				<article className="workDetails__info__description">
					<p className="workDetails__info__description__text">{Parser(description)}</p>
				</article>
				<footer className="workDetails__info__footer">
					<ul className="tags">
						{skills.map((skill, key = 0) => {
							return (
								<li key={key++} className="tag">
									<span className="tag__point" />
									<span className="tag__hole" />
									{skill}
								</li>
							);
						})}
					</ul>
					<section className="workDetails__info__footer__links">
						{links.map((link, key = 0) => {
							return (
								<p key={key++}>
									<a href={link.url} className="workDetails__info__footer__links__link" target="_blank" rel="noopener">
										{link.title}
									</a>
								</p>
							);
						})}
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
	links: PropTypes.array.isRequired
};

export default WorkDescription;
