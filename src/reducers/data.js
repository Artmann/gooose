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
  const sortedCards = cards
    .filter(c => c.columnId === column.id)
    .sort((a, b) => a.order - b.order);

  const oldCardIndex = sortedCards.indexOf(card);
  const headIndex = oldCardIndex > index || oldCardIndex === -1 ? index : index + 1;
  const tailIndex = oldCardIndex < index || oldCardIndex === -1 ? index + 1 : index;

  const head = sortedCards.slice(0, headIndex).filter(c => c.id !== card.id);
  const tail = sortedCards.slice(tailIndex, sortedCards.length).filter(c => c.id !== card.id);

  return [
    ...head,
    card,
    ...tail
  ]
    .map((c, i) => ({ ...c, order: i }))
    .sort((a, b) => a.order - b.order);
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

      newState[action.model] = action.data;

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
