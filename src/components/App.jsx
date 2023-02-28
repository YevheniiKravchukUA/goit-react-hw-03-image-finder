import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ImageGallery/Button/Button';
import { Component } from 'react';
import { fetchImages } from 'api/fetchImages';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isOpen: false,
    largeImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      const data = await fetchImages(searchQuery, page);

      this.setState(prevState => {
        return { images: [...prevState.images, ...data] };
      });
    }
  }

  onFormSubmit = async (e, inputValue) => {
    e.preventDefault();
    if (inputValue) {
      this.setState({
        searchQuery: inputValue,
        page: 1,
      });

      const data = await fetchImages(inputValue);

      this.setState({
        images: data,
      });
    }
  };

  onLoadMoreButtonClick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = largeImage => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen, largeImage: largeImage };
    });
  };

  render() {
    const { images, isOpen } = this.state;
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {images.length > 1 && (
          <>
            <ImageGallery images={images} toggleModal={this.toggleModal} />
            <Button onLoadMoreButtonClick={this.onLoadMoreButtonClick} />
          </>
        )}
        {isOpen && (
          <Modal
            largeImage={this.state.largeImage}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}
