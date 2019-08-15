const modelRegistry = {};

export function getModel(modelName) {
  if (!modelRegistry.hasOwnProperty(modelName)) {
    console.error(`Could not find model with name ${modelName}. Use registerModel to register it in the store.`);

    return {};
  }

  return modelRegistry[modelName];
}

export function registerModel(name, model) {
  modelRegistry[name] = model;
}
