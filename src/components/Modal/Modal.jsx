import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.toggleModal('');
  };

  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal('');
    }
  };

  render() {
    const { largeImage } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.onOverlayClick}>
        <div className="Modal">
          <img src={largeImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
