import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ image }) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

Modal.propTypes = {};


