import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: ${ props => props.theme.labelColor };
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
`;

interface LabelProps {
  children: ReactNode;
  target: string;
}

export default function Label({ children, target }: LabelProps): ReactNode {
  return (
    <StyledLabel htmlFor={ target }>
      { children }
    </StyledLabel>
  );
}
