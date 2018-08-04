import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setImageIndex, setImageModalVis } from '../../actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './WorkImages.css';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
	imageIndex: state.imageIndex,
});

const mapDispatchToProps = dispatch => ({
	openImageModal: () => dispatch(setImageModalVis(true)),
	closeImageModal: () => dispatch(setImageModalVis(false)),
	onClick: index => dispatch(setImageIndex(index)),
});

class WorkImages extends Component {
	constructor() {
		super();

		this.state = {
			isOpen: false,
		};
	}

	render() {
		const { images, workLabel, workTitle, onClick, imageIndex } = this.props;
		const { isOpen } = this.state;

		return (
			<section className="workDetails__images">
				{images.map((image, key = 0) => {
					return (
						<img
							key={key++}
							src={image.thumbnail}
							// onClick={e =>
							// 	this.setState({
							// 		isOpen: true,
							// 		photoIndex: (key - 1) % images.length,
							// 	})
							// }
							onClick={() => onClick((key - 1) % images.length)}
							alt={`${workLabel}-${workTitle}`}
							className="workDetails__images__image"
						/>
					);
				})}
				{isOpen && (
					<Lightbox
						mainSrc={images[imageIndex].fullSize}
						nextSrc={
							images.length > 1
								? images[(imageIndex + 1) % images.length].fullSize
								: undefined
						}
						prevSrc={
							images.length > 1
								? images[(imageIndex + images.length - 1) % images.length]
										.fullSize
								: undefined
						}
						onCloseRequest={() => this.setState({ isOpen: false })}
						// onMovePrevRequest={() =>
						// 	this.setState({
						// 		photoIndex: (photoIndex + images.length - 1) % images.length,
						// 	})
						// }
						onMovePrevRequest={() =>
							onClick((imageIndex + images.length - 1) % images.length)
						}
						// onMoveNextRequest={() =>
						// 	this.setState({ photoIndex: (photoIndex + 1) % images.length })
						// }
						onMoveNextRequest={() => onClick((imageIndex + 1) % images.length)}
						imageTitle={`${workLabel} | ${workTitle} | ${
							images[imageIndex].subTitle
						}`}
						imageCaption={images[imageIndex].caption}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WorkImages);
