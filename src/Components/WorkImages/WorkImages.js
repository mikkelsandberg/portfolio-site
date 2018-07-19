import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './WorkImages.css';
import PropTypes from 'prop-types';

class WorkImages extends Component {
	constructor() {
		super();

		this.state = {
			photoIndex: 0,
			isOpen: false,
		};
	}

	render() {
		const { images, workLabel, workTitle } = this.props;
		const { photoIndex, isOpen } = this.state;

		return (
			<section className="workDetails__images">
				{images.map((image, key = 0) => {
					return (
						<img
							key={key++}
							src={image.thumbnail}
							onClick={e =>
								this.setState({
									isOpen: true,
									photoIndex: (key - 1) % images.length,
								})
							}
							alt={`${workLabel}-${workTitle}`}
							className="workDetails__images__image"
						/>
					);
				})}
				{isOpen && (
					<Lightbox
						mainSrc={images[photoIndex].fullSize}
						nextSrc={
							images.length > 1
								? images[(photoIndex + 1) % images.length].fullSize
								: undefined
						}
						prevSrc={
							images.length > 1
								? images[(photoIndex + images.length - 1) % images.length]
										.fullSize
								: undefined
						}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + images.length - 1) % images.length,
							})
						}
						onMoveNextRequest={() =>
							this.setState({ photoIndex: (photoIndex + 1) % images.length })
						}
						imageTitle={`${workLabel} | ${workTitle} | ${
							images[photoIndex].subTitle
						}`}
						imageCaption={images[photoIndex].caption}
					/>
				)}
			</section>
		);
	}
}

WorkImages.propTypes = {
	images: PropTypes.array.isRequired,
	workLabel: PropTypes.string.isRequired,
	workTitle: PropTypes.string.isRequired,
};

export default WorkImages;
