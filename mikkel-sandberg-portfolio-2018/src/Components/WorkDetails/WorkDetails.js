import React, { Component } from 'react';

class WorkDetails extends Component {
	render() {
		const { workData } = this.props;
		const { workName } = this.props.match.params;
		const filteredWork = () => {
			let workItem = {};
			workData.find(item => {
				let formattedItem = `${item.workLabel.toLowerCase().replace(/\s/g, '-')}-${item.workTitle
					.toLowerCase()
					.replace(/\s/g, '-')}`;
				workItem = item;
				return formattedItem === workName;
			});
			console.log(workItem);
			return workItem;
		};

		return (
			<section id="workDetailsWrapper">
				<h1>{filteredWork().workTitle}</h1>
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
		);
	}
}

export default WorkDetails;
