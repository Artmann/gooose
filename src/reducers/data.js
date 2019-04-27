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

export default function data(state = initialState, action) {
  switch(action.type) {
    case 'FETCHED_BOARD':
      return  {
        ...state,
        boards: addOrUpdate(state.boards, action.board)
      };
    case 'FETCHED_BOARDS':
      return {
        ...state,
        boards: [...action.boards]
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
    default:
      return state;
  }
}
