import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryItems, ...otherProps }) => {
  return (
    <ul className='gallery'>
      {galleryItems.map((el) => <ImageGalleryItem
        key={el.id} smallImg={el.webformatURL} largeImg={el.largeImageURL} {...otherProps} />)}
    </ul>
  );
};

ImageGallery.propTypes = {};

