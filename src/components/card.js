import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { ThemeConsumer } from '../context/theme';
import { boxShadow } from '../styled-components/shadows';
import marked from 'marked';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CardContainer = styled.div`
  ${boxShadow}
  background: ${ props => props.background };
  border: solid 1px ${ props => props.borderColor }
  color: ${ props => props.color };
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 0.5rem 0.25rem;
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


function Card({ card, history, index }) {
  const { color, key, text } = card;
  const renderedText = () => ({ __html: marked(text || '') });

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
         <ThemeConsumer>
          {theme =>
            <CardContainer
              background={theme.containerBackground}
              borderColor={theme.borderColor}
              color={theme.textColor}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={() => history.push(`/cards/${card.id}`) }
              >
              <CardColorMarker color={color} />
              <CardText dangerouslySetInnerHTML={renderedText()}></CardText>
              <Key color={theme.secondaryTextColor}>{key}</Key>
            </CardContainer>
          }
        </ThemeConsumer>
      )}
    </Draggable>
  );
}

export default withRouter(Card);
