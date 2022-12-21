import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImg }) => {
  return (
    <li className='gallery-item'>
      <img src={smallImg} alt='' />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

