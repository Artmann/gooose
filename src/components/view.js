import AppHeader from './app-header';
import React from 'react';
import { ThemeConsumer } from '../context/theme';
import media from '../styled-components/media';
import styled from 'styled-components';

const Container = styled.div`
  background: ${ props => props.background };
  padding-top: ${ props => props.hasHeader ? '2.5rem' : '0' };
  position: relative;

  ${media.desktop`
    padding-top: 0;
  `}
`;

export default function View({ children, hasHeader, title }) {
  return (
    <ThemeConsumer>
      {
        theme =>
          <Container background={theme.background} hasHeader={hasHeader}>
            <AppHeader isEnabled={hasHeader} title={title} />
            { children }
          </Container>
      }
    </ThemeConsumer>
  );
}
