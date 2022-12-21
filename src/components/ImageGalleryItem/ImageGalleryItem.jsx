import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImg, largeImg, onClick }) => {
  return (
    <li className='gallery-item'>
      <img src={smallImg} onClick={() => onClick(largeImg)} alt='' />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

