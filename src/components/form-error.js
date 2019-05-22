import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMessage = styled.div`
  background: #cc8888;
  color: #fff;
  display: block;
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
`;

function FormError({ message }) {
  if (!message) {
    return null;
  }

  return <ErrorMessage>{message}</ErrorMessage>;
}

FormError.propTypes = {
  message: PropTypes.string
};

export default FormError;