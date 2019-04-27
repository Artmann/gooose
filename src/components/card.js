import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CardBorder = styled.div`
  background: ${ props => props.color };
  height: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;

function Card({ card, history, index }) {
  const { color, key, text } = card;

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
          <div className="card__title">{text}</div>
          <div className="card__key">{key}</div>
        </div>
      )}
    </Draggable>
  );
}

export default withRouter(Card);
