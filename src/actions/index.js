import Api from '../data/api';
import { getRelationships } from '../data/model-registry';
import { singular } from 'pluralize';

const api = new Api();

function fetchRelatedResources(dispatch, modelName, resource) {
  const relationships = getRelationships(modelName);

  relationships.forEach(({ modelName, name, type }) => {
    const fieldName = type === 'single' ? `${singular(name)}Id` : `${singular(name)}Ids`;

    if (!resource.hasOwnProperty(fieldName)) {
      console.log(`Expected resource to have the property '${fieldName}' on ${modelName}`);

      return;
    }

    const ids = Array.isArray(resource[fieldName]) ? resource[fieldName] : [resource[fieldName]];

    ids.forEach(id => {
      console.log(`Fetch Relation ${modelName} ${id}`);
      const action = find(modelName, id, { asRelation: true });

      if (action) {
        dispatch(action);
      }
    });
  });
}

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

const loadedResources = [];

export function find(modelName, id, options = {}) {
  const hash = `${modelName}-${id}`;

  if (loadedResources.includes(hash)) {
    console.log(`${hash} has already been loaded`);

    return null;
  }

  const defaultOptions = {
    asRelation: false
  };

  options = {
    ...defaultOptions,
    ...options
  }

  return function (dispatch) {
    dispatch({
      type: 'FETCH_STARTED',
      modelName,
      id
    });

    api.fetchResource(modelName, id).then(resource => {
      loadedResources.push(hash);

      fetchRelatedResources(dispatch, modelName, resource);

      console.log('DISPATCH FETCHED RESOURCE', modelName, id, resource);
      dispatch({
        type: 'FETCHED_RESOURCE',
        modelName,
        resource
      });
    });
  }
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
