const initialState = {
  boards: [],
  cards: []
}

export default function data(state = initialState, action) {
  switch(action.type) {
    case 'FETCHED_BOARD':
    return {
      ...state,

    };
    case 'FETCHED_BOARDS':
      return {
        ...state,
        boards: [...action.boards]
      };
    case 'FETCHED_DATA':
      const newState = { ...state };

      newState[action.model] = action.data;

      return newState;
    default:
      return state;
  }
}
