import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, toggleModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImage={webformatURL}
            modalImage={largeImageURL}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
}
