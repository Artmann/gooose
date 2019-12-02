/*eslint-disable-next-line */
Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};

const cardIncrement = 2048;

function moveCard(board, origin, destination) {
  const columns = [...board.columns];
  const originCards = [...columns.find(c => c.id === origin.columnId).cards];
  const destinationCards = [...columns.find(c => c.id === destination.columnId).cards];

  const [ card ] = originCards.splice(origin.index, 1);

  const targetCards = origin.columnId === destination.columnId ? originCards : destinationCards;

  targetCards.insert(destination.index, card);

  const index = destination.index;
  if (index === 0) {
    card.order = targetCards.length > 1 ? targetCards[1].order - cardIncrement : 0;
  } else {
    const previousPosition = targetCards[index - 1].order;
    const nextPosition = index >= targetCards.length - 1 ?
      targetCards[targetCards.length - 2].order + cardIncrement :
      targetCards[index + 1].order;

    card.order = previousPosition + 0.5 * (nextPosition - previousPosition);
  }

  card.columnId = destination.columnId;

  return [{
    ...board,
    columns: board.columns.map(column => {
      if (column.id === destination.columnId) {
        return {
          ...column,
          cards: targetCards
        };
      }

      if (column.id === origin.columnId) {
        return {
          ...column,
          cards: originCards
        };
      }

      return column;
    })
  }, card ];
}

export default {
  moveCard
}
