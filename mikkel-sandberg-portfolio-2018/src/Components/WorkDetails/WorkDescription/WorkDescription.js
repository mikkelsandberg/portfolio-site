import React, { Component } from "react";
import "./WorkDescription.css";

class WorkDescription extends Component {
	render() {
		const { description, skills, links } = this.props;

		return (
			<section className="workDetails__info">
				<article className="workDetails__info__description">
					<p className="workDetails__info__description__text">{description}</p>
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
									<a
										href={link.url}
										className="workDetails__info__footer__links__link"
										target="_blank"
										rel="noopener"
									>
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

export default WorkDescription;
