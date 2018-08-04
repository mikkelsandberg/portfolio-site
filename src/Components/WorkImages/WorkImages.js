import React from 'react';
import { connect } from 'react-redux';
import { openImageModal, setImageModalVis } from '../../actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './WorkImages.css';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
	return {
		imageIndex: state.imageIndex,
		imageModalVis: state.imageModalVis
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onClick: index => dispatch(openImageModal(index)),
		closeImageModal: () => dispatch(setImageModalVis(false))
	};
}

function WorkImages(props) {
	const { images, workLabel, workTitle, imageIndex, imageModalVis, onClick, closeImageModal } = props;

	return (
		<section className="workDetails__images">
			{images.map((image, key = 0) => {
				return (
					<img
						key={key++}
						src={image.thumbnail}
						onClick={() => onClick((key - 1) % images.length)}
						alt={`${workLabel}-${workTitle}`}
						className="workDetails__images__image"
					/>
				);
			})}
			{imageModalVis && (
				<Lightbox
					mainSrc={images[imageIndex].fullSize}
					nextSrc={images.length > 1 ? images[(imageIndex + 1) % images.length].fullSize : undefined}
					prevSrc={images.length > 1 ? images[(imageIndex + images.length - 1) % images.length].fullSize : undefined}
					onCloseRequest={() => closeImageModal()}
					onMovePrevRequest={() => onClick((imageIndex + images.length - 1) % images.length)}
					onMoveNextRequest={() => onClick((imageIndex + 1) % images.length)}
					imageTitle={`${workLabel} | ${workTitle} | ${images[imageIndex].subTitle}`}
					imageCaption={images[imageIndex].caption}
				/>
			)}
		</section>
	);
}

WorkImages.propTypes = {
	images: PropTypes.array.isRequired,
	workLabel: PropTypes.string.isRequired,
	workTitle: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkImages);
