import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {};

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
