import Api from '../data/api';
import { Dispatch } from 'react';

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

export function fetchBoard(id: any) {
  return function (dispatch: any) {
    api.getBoard(id).then(board => dispatch(fetchedBoard(board)));
  }
}

export function fetchBoards() {
  return function (dispatch: any) {
    api.getBoards().then(boards => dispatch(fetchedBoards(boards)));
  };
}

export function fetchCards() {
  return function (dispatch: any) {
    api.getCards().then(cards => dispatch(fetchedCards(cards)));
  }
}

export function fetchModel<T>(modelName: string, id: number) {
  return function (dispatch: Function) {
    api.find<T>(modelName, id).then((model: T) => {
      dispatch(fetchedModel<T>(model, modelName));
    });
  }
}

export function fetchModels<T>(modelName: string) {
  return function (dispatch: Function) {
    api.findAll<T>(modelName).then((models: T[]) => {
      dispatch(fetchedModels<T>(models, modelName));
    });
  }
}

export function fetchedBoard(board: any) {
  return {
    type: 'FETCHED_BOARD',
    board
  };
}

export function fetchedBoards(boards: any) {
  return {
    type: 'FETCHED_BOARDS',
    boards
  };
}

export function fetchedCard(card: any) {
  return {
    type: 'FETCHED_CARD',
    card
  };
}

export function fetchedCards(cards: any) {
  return {
    type: 'FETCHED_CARDS',
    cards
  };
}

export function fetchedData(model: any, data: any) {
  return {
    type: 'FETCHED_DATA',
    model,
    data
  };
}

export function fetchedModel<T>(model: T, modelName: string) {
  return {
    type: 'FETCHED_MODEL',
    model,
    modelName
  };
}

export function fetchedModels<T>(models: T[], modelName: string) {
  return {
    type: 'FETCHED_MODELS',
    models,
    modelName
  };
}

export function fetchedUser(user: any) {
  return {
    type: 'FETCHED_USER',
    user
  };
}

export function moveCard(column: any, card: any, index: any) {
  return {
    type: 'MOVED_CARD',
    column,
    card,
    index
  }
}
