import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <header className='searchbar'>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className='form'>
          <button type='submit' className='button'>
            <span className='button-label'>Search</span>
          </button>

          <Field
            name='search'
            className='input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </Form>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {};

