import './models';

import { getModel } from './model-registry';

function defaultValueFortype(type) {
  if (Array.isArray(type)) {
    const [ relationType, modelName ] = type;

    if (relationType === 'collection') {
      return [];
    }

    if (relationType === 'single') {
      return createObject(modelName);
    }
  }

  if (type === 'bool') {
    return false;
  }

  if (type === 'string') {
    return '';
  }

  if (type === 'number') {
    return 0;
  }

  if (type === 'datetime') {
    return new Date(Date.now()).toString();
  }

  return null;
}

export function property(type) {
  return type;
}

export function belongsTo(modelName) {
  return ['single', modelName];
}

export function createObject(modelName, data) {
  const model = getModel(modelName);

  return Object.keys(model).reduce((carry, key) => {
    const type = model[key];

    return {
      ...carry,
      [key]: defaultValueFortype(type)
    }
  }, {...data});
}

export function hasMany(modelName) {
  return ['collection', modelName];
}
