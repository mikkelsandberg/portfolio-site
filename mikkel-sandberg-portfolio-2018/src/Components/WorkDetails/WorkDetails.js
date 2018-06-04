import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './WorkDetails.css';

class WorkDetails extends Component {
	constructor() {
		super();

		this.state = {
			photoIndex: 0,
			isOpen: false
		};
	}

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
		const { workLabel, workTitle, images, description, skills, links } = filteredWork();
		const { photoIndex, isOpen } = this.state;

		return (
			<section id="workDetailsWrapper">
				<header>
					<nav>
						<a href="/" onClick={this.goBack}>
							Back to home
						</a>
					</nav>
					<h2>{workLabel}</h2>
					<h1>{workTitle}</h1>
				</header>

				<section id="contentWrapper">
					<section id="imagesWrapper">
						{images.map((image, key = 0) => {
							return image === '' ? (
								''
							) : (
								<img
									key={key++}
									src={image.url}
									onClick={e => this.setState({ isOpen: true, photoIndex: (key - 1) % images.length })}
									alt={`${workLabel}-${workTitle}`}
								/>
							);
						})}
						{isOpen && (
							<Lightbox
								mainSrc={images[photoIndex].url}
								nextSrc={images.length > 1 ? images[(photoIndex + 1) % images.length].url : undefined}
								prevSrc={images.length > 1 ? images[(photoIndex + images.length - 1) % images.length].url : undefined}
								onCloseRequest={() => this.setState({ isOpen: false })}
								onMovePrevRequest={() =>
									this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length })
								}
								onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % images.length })}
								imageTitle={`${workLabel} | ${workTitle} | ${images[photoIndex].subTitle}`}
								imageCaption={images[photoIndex].caption}
							/>
						)}
					</section>
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
				</section>
			</section>
		);
	}
}

export default WorkDetails;
