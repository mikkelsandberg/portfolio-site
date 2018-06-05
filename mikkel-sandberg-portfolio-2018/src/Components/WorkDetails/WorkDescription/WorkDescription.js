import React, { Component } from 'react';

class WorkDescription extends Component {
	render() {
		const { description, skills, links } = this.props;

		return (
			<section id="descriptionWrapper">
				<article id="descriptionText">
					<p>{description}</p>
				</article>
				<footer>
					<ul id="tags">
						{skills.map((skill, key = 0) => {
							return (
								<li key={key++}>
									<span className="tagPoint" />
									<span className="tagHole" />
									{skill}
								</li>
							);
						})}
					</ul>
					<section id="linksWrapper">
						{links.map((link, key = 0) => {
							return (
								<p key={key++}>
									<a href={link.url} target="_blank" rel="noopener">
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
