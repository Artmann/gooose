import React, { ReactElement, FormEvent } from 'react';
import styled from 'styled-components';

export interface TextAreaProps {
  autoFocus: boolean;
  onChange: (value: string) => void;
  placeholder: string;
  rows: number;
  style?: object;
  value: string;
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

export default function TextArea({ autoFocus, onChange, placeholder, value, rows, style={} }: TextAreaProps): ReactElement {
  return <StyledTextArea
      autoFocus = { autoFocus }
      placeholder = { placeholder }
      defaultValue = { value }
      onChange = { (event: FormEvent<HTMLTextAreaElement>) => onChange(event.currentTarget.value) }
      rows = { rows }
      style = { style }
    />;
}
