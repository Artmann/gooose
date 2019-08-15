const modelRegistry = {};

export function getModel(modelName) {
  if (!modelRegistry.hasOwnProperty(modelName)) {
    console.error(`Could not find model with name ${modelName}. Use registerModel to register it in the store.`);

    return {};
  }

  return modelRegistry[modelName];
}

export function getRelationships(modelName) {
  const model = getModel(modelName);

  return Object.keys(model)
    .filter(key => Array.isArray(model[key]))
    .reduce((previous, key) => {
      const [ type, otherModelName ] = model[key];

      return [
        ...previous,
        {
          modelName: otherModelName,
          name: key,
          type
        }
      ];
    }, []);
}

export function registerModel(name, model) {
  modelRegistry[name] = model;
}
