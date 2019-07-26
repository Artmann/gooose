import Api from '../data/api';

const api = new Api();

export function appStarted() {
  return {
    type: 'APP_STARTED'
  };
}

export function authorized() {
  return {
    type: 'AUTHORIZED'
  };
}

export function fetchBoard(id) {
  return function (dispatch) {
    api.getBoard(id).then(board => dispatch(fetchedBoard(board)));
  }
}

export function fetchBoards() {
  return function (dispatch) {
    api.getBoards().then(boards => dispatch(fetchedBoards(boards)));
  };
}

export function fetchCard(id) {
  return function (dispatch) {
    api.getCard(id).then(card => dispatch(fetchedCard(card)));
  }
}

export function fetchCards() {
  return function (dispatch) {
    api.getCards().then(cards => dispatch(fetchedCards(cards)));
  }
}

export function fetchedBoard(board) {
  return {
    type: 'FETCHED_BOARD',
    board
  };
}

export function fetchedBoards(boards) {
  return {
    type: 'FETCHED_BOARDS',
    boards
  };
}

export function fetchedCard(card) {
  return {
    type: 'FETCHED_CARD',
    card
  };
}

export function fetchedCards(cards) {
  return {
    type: 'FETCHED_CARDS',
    cards
  };
}

export function fetchedData(model, data) {
  return {
    type: 'FETCHED_DATA',
    model,
    data
  };
}

export function fetchedUser(user) {
  return {
    type: 'FETCHED_USER',
    user
  };
}

export function moveCard(column, card, index) {
  return {
    type: 'MOVED_CARD',
    column,
    card,
    index
  }
}
