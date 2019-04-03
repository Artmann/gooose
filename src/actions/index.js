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
  return function(dispatch) {
    api.getBoard(id).then(board => dispatch(fetchedBoard(board)));
  }
}

export function fetchBoards() {
  return function(dispatch) {
    api.getBoards().then(boards => dispatch(fetchedBoards(boards)));
  };
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
