import React, { Component } from "react";
import AboutMeData from "../../Util/AboutMeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Parser from "html-react-parser";
import { withRouter } from "react-router-dom";
import "./AboutMe.css";
import PropTypes from "prop-types";

class AboutMe extends Component {
	navigateInternal = e => {
		e.preventDefault();

		if (e.target.tagName === "A" && !e.target.hasAttribute("target")) {
			this.props.history.push(e.target.getAttribute("href"));
		}
	};

	render() {
		const { profilePic, stats, introText, bodyContent } = AboutMeData;
		const { navigateInternal } = this;
		const { browserWidth } = this.props;

		return (
			<section
				className={`aboutMe__wrapper${
					browserWidth < 768 ? " aboutMe__wrapper--mobile" : ""
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
				</article>
			</section>
		);
	}
}

AboutMe.propTypes = {
	browserWidth: PropTypes.number
};

export default withRouter(AboutMe);
