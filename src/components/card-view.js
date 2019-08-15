import { shape, string } from 'prop-types';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Timeline from './timeline';
import light from '../themes/light';
import marked from 'marked'
import media from '../styled-components/media';
import styled from 'styled-components';

const skeletonStyle = `
  background: #E2E8F0;
  color: transparent;
  height: 12rem;
  overflow: hidden;
  width: 100;
`;

const Container = styled.div`
  background: #fff;
  color: ${ props => props.color };
  line-height: 1.75;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  min-height: 100vh;
  padding: 2rem 0;
  width: 100%;

  p { margin: 0 0 0.75rem; }

  ${ media.desktop`
    margin: 2rem auto;
    max-width: 48rem;
    padding: 2rem;
  `}
`;

const CardText = styled.div`
  ${ props => props.skeleton && skeletonStyle }

  background: #fff;
  margin: 0 1rem 1rem;
  padding: 1.25rem 1.5rem;
`;

const Divider = styled.div`
  border-bottom: solid 1px #A0AEC0;
`;

function CardView({ card }) {
  const skeleton = !card;
  const { text = '', events = [] } = card || {};
  const renderedText = { __html: marked(text) };

  return (
    <ThemeProvider theme={light}>
      <Container color={light.textColor}>
        <CardText dangerouslySetInnerHTML={renderedText} skeleton={skeleton}/>

        <Divider />

        <Timeline events={events} />
      </Container>
    </ThemeProvider>
  );
}

CardView.propTypes = {
  card: shape({
    text: string
  })
};

export default CardView;
