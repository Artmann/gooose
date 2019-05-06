import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CardBorder = styled.div`
  background: ${ props => props.color };
  height: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const CardText = styled.div`
  flex: 1;
  line-height: 2;
  font-size: 0.8rem;
  padding: 0.5rem 1.25rem;

  p { margin: 0; }
`;

function Card({ card, history, index }) {
  const { color, key, text } = card;
  const renderedText = () => ({ __html: marked(text || '') });

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => history.push(`/cards/${card.id}`) }
          >
          <CardBorder color={color} />
          <CardText dangerouslySetInnerHTML={renderedText()}></CardText>
          <div className="card__key">{key}</div>
        </div>
      )}
    </Draggable>
  );
}

export default withRouter(Card);
