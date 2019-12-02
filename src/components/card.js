import marked from 'marked';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeConsumer } from '../context/theme';
import { boxShadow } from '../styled-components/shadows';

const CardContainer = styled.a`
  ${boxShadow}
  background: ${ props => props.background };
  border: solid 1px ${ props => props.borderColor }
  color: ${ props => props.color };
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  max-width: 22rem;
  padding: 1rem 0.25rem;
  position: relative;
  text-decoration: none;
  width: 100%;
`;
const CardColorMarker = styled.div`
  background: ${ props => props.color };
  height: 2.5rem;
  left: 0;
  margin-bottom: 1rem;
  position: absolute;
  top: 1.5rem;
  width: 0.25rem;
`;
const CardText = styled.div`
  flex: 1;
  line-height: 1.75;
  font-size: 1.0rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1.25rem;

  p { margin: 0; }
`;
const Key = styled.div`
  color: ${ props => props.color };
  font-size: 0.75rem;
  letter-spacing: 0.04rem;
  padding: 0.25rem 1.25rem;
  text-transform: uppercase;
`;

const defaultDragOptions = {
  innerRef: null,
  draggableProps: {},
  dragHandleProps: {}
};

function Card({ card, disableLink = false, draggable = defaultDragOptions }) {
  const { boardId, color, key, summary, text } = card;
  const renderedText = () => ({ __html: marked((summary || text ) || '') });

  return (
    <ThemeConsumer>
      {theme =>
        <CardContainer
          background = { theme.containerBackground }
          borderColor = { theme.borderColor }
          color = { theme.textColor }
          href = { disableLink ? null : `/boards/${boardId}/cards/${card.key}` }
          ref = { draggable.innerRef }
          { ...draggable.draggableProps }
          { ...draggable.dragHandleProps }
          >
          <CardColorMarker color={ color } />
          <CardText dangerouslySetInnerHTML={ renderedText() }></CardText>
          <Key color={ theme.secondaryTextColor }>
            { key }
          </Key>
        </CardContainer>
      }
    </ThemeConsumer>
  );
}

export default withRouter(Card);
