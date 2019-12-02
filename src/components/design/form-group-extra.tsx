import React, { ReactNode, ReactChildren } from 'react';
import styled from 'styled-components';
import media from '../../styled-components/media';

interface FormGroupExtraProps {
  children: ReactChildren;
  style?: object;
}

const Extra = styled.div`
  flex: 1;
  padding-left: 0;
  padding-top: 1rem;
  max-height: 100%;
  overflow: auto;

  ${media.desktop`
    padding-left: 4rem;
  `}
`;

export default function FormGroupExtra({ children, style = {} }: FormGroupExtraProps): ReactNode {
  return (
    <Extra style={ style }>
      { children }
    </Extra>
  );
}
