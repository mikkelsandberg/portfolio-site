import React, { Component } from "react";
import WorkHeader from "./WorkHeader/WorkHeader";
import WorkImages from "./WorkImages/WorkImages";
import WorkDescription from "./WorkDescription/WorkDescription";
import "./WorkDetails.css";

class WorkDetails extends Component {
	setInitialScroll = () => {
		return window.scroll({ top: 0 });
	};

	componentDidMount() {
		this.setInitialScroll();
	}

	render() {
		const { formatText, workData } = this.props;
		const { workName } = this.props.match.params;
		const filteredWork = () => {
			let workItem = {};
			workData.find(item => {
				let formattedItem = `${formatText(item.workLabel)}-${formatText(
					item.workTitle
				)}`;
				workItem = item;
				return formattedItem === workName;
			});
			return workItem;
		};
		const {
			workLabel,
			workTitle,
			images,
			description,
			skills,
			links
		} = filteredWork();

		return (
			<section id="workDetailsWrapper">
				<WorkHeader
					goBack={this.goBack}
					workLabel={workLabel}
					workTitle={workTitle}
				/>

				<section id="contentWrapper">
					<WorkImages
						images={images}
						workLabel={workLabel}
						workTitle={workTitle}
					/>
					<WorkDescription
						description={description}
						skills={skills}
						links={links}
					/>
					{/*<section id="descriptionWrapper">
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
					</section>*/}
				</section>
			</section>
		);
	}
}

export default WorkDetails;
