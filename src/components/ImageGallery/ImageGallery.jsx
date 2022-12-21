import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <ul className='gallery'>
      {galleryItems.map((el) => <ImageGalleryItem
        key={el.id} smallImg={el.webformatURL} />)}
    </ul>
  );
};

ImageGallery.propTypes = {};

