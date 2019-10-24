import createReducer from './reducer';
import { property } from './model';

describe('reducer', () => {
  let reducer;

  beforeEach(() => {
    const Post = {
      name: property('string')
    };

    Post.modelName = 'post';

    reducer = createReducer(Post);
  });

  it('has the correct default state', () => {
    expect(reducer).toBeInstanceOf(Function);

    expect(reducer(null, { type: 'DUMMY' })).toEqual({
      posts: []
    });
  });
});
