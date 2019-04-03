import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { withRouter } from 'react-router-dom';

function Card({ card, history, index }) {
  const { color, key, title } = card;

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
          <div className={`card__color card__color--${color}`} />
          <div className="card__title">{title}</div>
          <div className="card__key">{key}</div>
        </div>
      )}
    </Draggable>
  );
}

export default withRouter(Card);
