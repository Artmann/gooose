import Api from './api';

describe('api', () => {
  let adapter, api;

  beforeEach(() => {
    adapter = {
      get: jest.fn(),
      patch: jest.fn(),
      post: jest.fn()
    };

    api = new Api(adapter);
  });

  describe('createCard', () => {
    it('creates a card', async() => {
      adapter.post = jest.fn(() => Promise.resolve({
        card: {
          boardId: 23,
          color: '#FF00FF',
          text: 'As a developer, I want the test suite to pass.'
        }
      }));

      const card = await api.createCard(23, 'As a developer, I want the test suite to pass.', '#FF00FF');

      expect(adapter.post).toHaveBeenCalledWith('/cards', {
        card: {
          boardId: 23,
          color: '#FF00FF',
          text: 'As a developer, I want the test suite to pass.'
        }
      });

      expect(card.text).toBe('As a developer, I want the test suite to pass.');
      expect(card.color).toBe('#FF00FF');
      expect(card.boardId).toBe(23);
    });
  });

  describe('getBoards', () => {
    it('returns the boards', async() => {
      adapter.get = jest.fn(() => Promise.resolve({
        boards: [{ id: 1, name: 'board1' }, { id: 2, name: 'board2' }]
      }));

      const boards = await api.getBoards();

      expect(adapter.get).toHaveBeenCalledWith('/boards');

      expect(boards).toEqual([
        { id: 1, name: 'board1' },
        { id: 2, name: 'board2' }
      ]);
    });
  });

  describe('update', () => {
    it('updates a card', async() => {
      adapter.patch = jest.fn(() => Promise.resolve({
        card: {
          id: 1,
          boardId: 23,
          color: '#001100',
          text: 'As a developer, I want the test suite to pass.'
        }
      }));

      const card = await api.updateCard(1, { color: '#001100' });

      expect(adapter.patch).toHaveBeenCalledWith('/cards/1', {
        card: {
          color: '#001100'
        }
      });

      expect(card.id).toBe(1);
      expect(card.text).toBe('As a developer, I want the test suite to pass.');
      expect(card.color).toBe('#001100');
      expect(card.boardId).toBe(23);
    });
  });
});
