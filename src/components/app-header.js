import PropTypes from 'prop-types';
import React from 'react';
import { ThemeConsumer } from '../context/theme';
import media from '../styled-components/media';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border: solid 1px ${ props => props.borderColor };
  display: flex;
  height: 3rem;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  ${media.desktop`
    position: relative;
  `}
`;

const Title = styled.h1`
  color: ${ props => props.color };
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`;

function AppHeader({ title }) {
  return (
    <ThemeConsumer>
      {
        theme =>
          <Container borderColor={theme.borderColor} >
            <Title color={theme.textColor}>
              {title}
            </Title>
          </Container>
      }
    </ThemeConsumer>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string
};

export default AppHeader;