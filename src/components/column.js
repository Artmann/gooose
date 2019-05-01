import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Card from './card';
import React from 'react';

function Column({ cards, column, currentColumn, onCardMoved = () => {} }) {
  const isCurrent = column.id === currentColumn.id;
  const myCards = cards
    .filter(card => card.columnId === column.id)
    .sort((a, b) => a.order - b.order);

  const onDragEnd = ({ destination, source }) => {
    const card = myCards[source.index];

    if (!destination) {
      return;
    }

    onCardMoved(column, card, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div className={`column ${isCurrent ? "column--current" : ""}`} ref={provided.innerRef}>
            <div className="column__name">
              {column.name}
            </div>
            {myCards.map((card, key) => (
              <Card card={card} key={key} index={key} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Column;
