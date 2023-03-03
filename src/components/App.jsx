import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ImageGallery/Button/Button';
import { Component } from 'react';
import { fetchImages } from 'api/fetchImages';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    largeImage: '',
    totalHits: 0,
    page: 1,
    isLoad: false,
    isOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        this.showIsLoad();
        const data = await fetchImages(searchQuery, page);

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            totalHits: data.totalHits,
            isLoad: false,
          };
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  showIsLoad() {
    this.setState({ isLoad: true });
  }

  onFormSubmit = inputValue => {
    this.setState({
      images: [],
      searchQuery: inputValue,
      page: 1,
    });
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
    const { images, isOpen, totalHits, page, isLoad } = this.state;
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {images.length > 1 && (
          <>
            <ImageGallery images={images} toggleModal={this.toggleModal} />
            {console.log(totalHits)}
            {isLoad ? (
              <Loader />
            ) : (
              totalHits >= page * 12 && (
                <Button onLoadMoreButtonClick={this.onLoadMoreButtonClick} />
              )
            )}
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
