import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Label from '../label';

const Base = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: solid 1px #555;
  box-sizing: border-box;
  color: ${ props => props.theme.inputColor };
  font-size: 0.8rem;
  margin-bottom: 1px;
  padding: 0.5rem 0rem;
  width: 100%;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background: transparent;
    color: #f0f0f0;
    -webkit-box-shadow: 0px;
  }

  &:focus {
    border-bottom: solid 2px #6c72b5;
    margin-bottom: 0px;
    outline: none;
  }
`;

function TextInput({ autoFocus = false, label, name, placeholder = '', required = false, type = "text", value, onChange = () => {} }) {
  return (
    <Base>
      <Label>
        {label}
      </Label>
      <Input
        autoFocus={autoFocus}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        data-test-input={name}
        />
    </Base>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,

  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
