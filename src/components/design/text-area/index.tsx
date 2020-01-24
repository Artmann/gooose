import React, { ReactElement, FormEvent, forwardRef } from 'react';
import styled from 'styled-components';

export interface TextAreaProps {
  onChange: (value: string) => void;
  placeholder: string;
  rows: number;
  value: string;

  autoFocus?: boolean;
  disabled?: boolean;
  style?: object;
}

const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 0;
  color: ${ props => props.theme.textColor };
  font-size: 1rem;
  line-height: 1.65;
  max-height: 100%;
  outline: 0;
  width: 100%;
`;

function TextArea(
  { autoFocus, disabled, onChange, placeholder, rows, style={}, value }: TextAreaProps,
  ref: any
): ReactElement {
  return <StyledTextArea
      autoFocus = { autoFocus || false }
      value = { value }
      disabled={ disabled }
      onChange = { (event: FormEvent<HTMLTextAreaElement>) => onChange(event.currentTarget.value) }
      placeholder = { placeholder }
      ref={ ref }
      rows = { rows }
      style = { style }
  />;
}

export default forwardRef(TextArea);
