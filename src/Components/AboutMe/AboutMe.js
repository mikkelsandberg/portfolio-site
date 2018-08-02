import React from 'react';
import AboutMeData from '../../Util/AboutMeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';
import { withRouter } from 'react-router-dom';
import './AboutMe.css';
import PropTypes from 'prop-types';

const AboutMe = props => {
	const { browserWidth, history } = props;
	const { profilePic, stats, introText, bodyContent } = AboutMeData;
	const resumeHref =
		'https://drive.google.com/file/d/1GKO30rKzPW7X1DcBhZOZhZVtZ8HRa92n/view?usp=sharing';

	const navigateInternal = e => {
		e.preventDefault();

		if (e.target.tagName === 'A' && !e.target.hasAttribute('target')) {
			history.push(e.target.getAttribute('href'));
		}
	};

	return (
		<section
			className={`aboutMe__wrapper${
				browserWidth < 768 ? ' aboutMe__wrapper--mobile' : ''
			}`}
		>
			<img
				className="aboutMe__profilePic"
				src={profilePic}
				alt="Mikkel Sandberg profile"
			/>
			<article className="aboutMe__intro">
				<section className="aboutMe__intro__stats">
					{stats.map((item, key = 0) => {
						return (
							<div key={key++} className="aboutMe__intro__stat">
								<FontAwesomeIcon
									icon={item.icon}
									className="aboutMe__intro__stat__icon"
								/>
								<p className="aboutMe__intro__stat__text">
									{Parser(item.stat)}
								</p>
							</div>
						);
					})}
				</section>
			</article>
			<article className="aboutMe__body">
				<p className="aboutMe__body__introText">{Parser(introText)}</p>
				{bodyContent.map((item, key = 0) => {
					return (
						<p
							key={key++}
							className="aboutMe__body__text"
							onClick={e => navigateInternal(e)}
						>
							{Parser(bodyContent[0])}
						</p>
					);
				})}
				<a
					className="aboutMe__body__downloadResumeButton"
					href={resumeHref}
					target="_blank"
					rel="noopener noreferrer"
				>
					View R&eacute;sum&eacute;
				</a>
			</article>
		</section>
	);
};

AboutMe.propTypes = {
	browserWidth: PropTypes.number.isRequired,
};

export default withRouter(AboutMe);
