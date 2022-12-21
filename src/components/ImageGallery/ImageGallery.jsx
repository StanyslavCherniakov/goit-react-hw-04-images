import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryItems, ...otherProps }) => {
  return (
    <ul className='gallery'>
      {galleryItems.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem
        key={id} smallImg={webformatURL} largeImg={largeImageURL} {...otherProps} />)}
    </ul>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
};

