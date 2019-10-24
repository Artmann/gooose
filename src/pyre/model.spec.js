import { belongsTo, createObject, hasMany, property } from './model';

import { registerModel } from './model-registry';

describe('Model', () => {
  it('returns the correct property type', () => {
    expect(property('string')).toEqual('string');
  });

  it('returns the correct relation for belongsTo', () => {
    expect(belongsTo('Post')).toEqual(['belongsTo', 'Post']);
  });

  it('returns the correct relation for hasMany', () => {
    expect(hasMany('Comment')).toEqual(['hasMany', 'Comment']);
  });

  it('creates an object with default values', () => {
    const model = {
      isPublished: property('bool'),
      title: property('string'),
      stars: property('number'),
      publisedAt: property('datetime'),
    };
    const now = Date.now();

    Date.now = jest.fn(() => now);

    registerModel('Post', model);

    expect(createObject('Post')).toEqual({
      isPublished: false,
      title: '',
      stars: 0,
      publisedAt: new Date(now).toString()
    });
  });

  it('default object has an empty array for has many relations', () => {
    const model = {
      comments: hasMany('Comment')
    };
    
    registerModel('Post', model);

    expect(createObject('Post')).toEqual({
      comments: []
    });
  });
});
