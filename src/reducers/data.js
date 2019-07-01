const initialState = {
  boards: [],
  cards: []
}

function addOrUpdate(collection, model) {
  if (collection.find(item => item.id === model.id)) {
    return collection.map(item => item.id === model.id ? model : item);
  }

  return [
    ...collection,
    model
  ];
}

function reOrderCards(cards, column, card, index) {
  const reOrderedCards = cards
    .filter(c => c.columnId === column.id)
    .filter(c => c.id !== card.id)
    .sort((a, b) => a.order - b.order);

  reOrderedCards.splice(index, 0, card);

  const maxOrder = Math.max(...reOrderedCards.map(c => c.order));
  const previousOrder = index > 0 ? reOrderedCards[index - 1].order : 0;
  const nextOrder = index <= (reOrderedCards.length - 2) ? reOrderedCards[index + 1].order : maxOrder * 2;
  const newOrder = previousOrder + (nextOrder - previousOrder) * 0.5;

  return cards.map(c => {
    if (c.id === card.id) {
      return {
        ...card,
        order: newOrder
      };
    }

    return c;
  }).sort((a, b) => a.order - b.order);
}

export default function data(state = initialState, action) {
  switch (action.type) {
    case 'FETCHED_BOARD':
      return {
        ...state,
        boards: addOrUpdate(state.boards, action.board)
      };
    case 'FETCHED_BOARDS':
      return {
        ...state,
        boards: [...action.boards]
      };
    case 'FETCHED_CARD':
      return {
        ...state,
        cards: addOrUpdate(state.cards, action.card)
      };
    case 'FETCHED_CARDS':
      return {
        ...state,
        cards: [...action.cards]
      };
    case 'FETCHED_DATA':
      const newState = { ...state };

      newState[action.model] = addOrUpdate(state[action.model], action.data);

      return newState;
    case 'MOVED_CARD':
      return {
        ...state,
        cards: reOrderCards(state.cards, action.column, action.card, action.index)
      };
    default:
      return state;
  }
}
