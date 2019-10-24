import { createObject } from './model';
import pluralize from 'pluralize';

function addOrUpdate(collection, resource) {
  const existingResource = collection.find(item => item.id === resource.id);

  if (existingResource) {
    return collection.map(item => item.id === resource.id ? { ...existingResource, ...resource } : item);
  }

  return [
    ...collection,
    resource
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

function updateResource(state, modelName, resource) {
  const collectionName = pluralize(modelName);
  const collection = state.hasOwnProperty(collectionName) ? state[collectionName] : [];

  return {
    ...state,
    [collectionName]: addOrUpdate(collection, resource)
  };
}

export default function createReducer(...models) {
  const initialState = models.reduce((carry, model) => {
    const name = pluralize(model.modelName.toLowerCase());

    return {
      ...carry,
      [name]: []
    };
  }, {});

  const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
      case 'FETCH_STARTED':
        return updateResource(state, action.modelName, createObject(action.modelName, { id: action.id }));
      case 'FETCHED_RESOURCE':
        return updateResource(state, action.modelName, action.resource);
      case 'FETCHED_BOARD':
        return {
          ...state,
          boards: addOrUpdate(state.boards, action.board)
        };
      default:
        return state;
    }
  }

  return reducer;
}
