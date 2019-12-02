import React, { ReactNode } from 'react';
import styled from 'styled-components';

import media from '../../styled-components/media';

interface FormGroupMainProps {
  children: ReactNode;
}

const Main = styled.div`
  flex: 1;
  padding-right: 1rem;
  max-height: 100%;

  ${media.desktop`
    padding-right: 4rem;
  `}
`;

export default function FormGroupMain({ children }: FormGroupMainProps) {
  return (
    <Main>
      { children }
    </Main>
  );
}
