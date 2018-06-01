import React, { Component } from 'react';
import './WorkDetails.css';

class WorkDetails extends Component {
	goBack = e => {
		e.preventDefault();

		window.history.back();
	};

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
				let formattedItem = `${formatText(item.workLabel)}-${formatText(item.workTitle)}`;
				workItem = item;
				return formattedItem === workName;
			});
			return workItem;
		};

		return (
			<section id="workDetailsWrapper">
				<header>
					<nav>
						<a href="/" onClick={this.goBack}>
							Back to home
						</a>
					</nav>
					<h2>{filteredWork().workLabel}</h2>
					<h1>{filteredWork().workTitle}</h1>
				</header>

				<section id="contentWrapper">
					<section id="imagesWrapper">
						{filteredWork().images.map((image, key = 0) => {
							return image === '' ? '' : <img key={key++} src={image} alt={`${filteredWork().workTitle}`} />;
						})}
					</section>
					<section id="descriptionWrapper">
						<p>{filteredWork().description}</p>
						<ul id="tags">
							{filteredWork().skills.map((skill, key = 0) => {
								return <li key={key++}>{skill}</li>;
							})}
						</ul>
					</section>
				</section>
			</section>
		);
	}
}

export default WorkDetails;
