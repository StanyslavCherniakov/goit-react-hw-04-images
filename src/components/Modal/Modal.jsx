import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {

  closeModalOnEsc = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose('');
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose('');
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalOnEsc);
  }

  render() {
    return (
      <Overlay className='overlay' onClick={this.handleBackDropClick}>
        <ModalWindow className='modal'>
          <img src={this.props.image} alt='' />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {};








