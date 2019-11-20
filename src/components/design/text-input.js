import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  color: ${ props => props.theme.labelColor };
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
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
