import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { smallImage, modalImage, toggleModal } = this.props;

    return (
      <li
        className="ImageGalleryItem"
        onClick={() => {
          toggleModal(modalImage);
        }}
      >
        <img
          className="ImageGalleryItem-image"
          src={smallImage}
          alt=""
          data-large={modalImage}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  modalImage: PropTypes.string,
  smallImage: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
