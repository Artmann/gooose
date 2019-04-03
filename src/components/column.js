import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React, { useState } from "react";

import Card from "./card";

function Column({ cards, column, currentColumn }) {
  const isCurrent = column.id === currentColumn.id;
  const myCards = cards
    .filter(card => card.columnId === column.id)
    .sort((a, b) => a.order - b.order);

  const onDragEnd = result => {
    console.log('onDragEnd', result);
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
