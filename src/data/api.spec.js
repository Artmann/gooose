describe('api', () => {
  let adapter, api;

  beforeEach(() => {
    adapter = {
      get: jest.fn(),
      post: jest.fn()
    };

    api = new Api(adapter);
  });

  describe('createCard', () => {
    it('creates a card', () => {
      adapter.post = jest.fn(() => ({
        card: {
          boardId: 23,
          color: 'red',
          title: 'my title'
        }
      }));

      const card = api.createCard('my title', 'red', 23);

      expect(adapter.post).toHaveBeenCalledWith('/cards', {
        card: {
          boardId: 23,
          color: 'red',
          title: 'my title'
        }
      });

      expect(card.title).toBe('my title');
      expect(card.color).toBe('red');
      expect(card.boardId).toBe(23);
    });
  });

  describe('getBoards', () => {
    it('returns the boards', () => {
      adapter.get = jest.fn(() => ({
        boards: [{ id: 1, name: 'board1'}, { id: 2, name: 'board2'}]
      }));

      const boards = api.getBoards();

      expect(adapter.get).toHaveBeenCalledWith('/boards');

      expect(boards).toBe([
        { id: 1, name: 'board1'},
        { id: 2, name: 'board2'}
      ]);
    });
  });

});
