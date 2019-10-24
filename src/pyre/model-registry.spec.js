import { belongsTo, hasMany, property } from './model';
import { getModel, getRelationships, registerModel } from './model-registry';

describe('Model Registry', () => {
  it('adds a model to the registry', () => {
      const model = { name: 'Chris' };

      registerModel('User', model);

      expect(getModel('User')).toEqual(model);
  });

  it('returns the relationships for a given model', () => {
    const post = {
        title: property('string'),
        
        category: belongsTo('Category'),
        comments: hasMany('Comment')
    };

    registerModel('Post', post);
    
    const relationships = getRelationships('Post');

    expect(relationships).toEqual([
      { modelName: 'Category', name: 'category', type : 'belongsTo' },
      { modelName: 'Comment', name: 'comments', type: 'hasMany' }
    ]);
  });
});
