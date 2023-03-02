import { PropTypes } from 'prop-types';
import { Component } from 'react';

export class Button extends Component {
  render() {
    const { onLoadMoreButtonClick } = this.props;

    return (
      <button className="Button" type="button" onClick={onLoadMoreButtonClick}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};
