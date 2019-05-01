import { fetchedCard, moveCard } from './index';

describe('actions', () => {
  describe('fetchedCard', () => {
    it('returns the correct action', () => {
      const action = fetchedCard({ id: 1 });

      expect(action).toEqual({
        type: 'FETCHED_CARD',
        card: { id: 1 }
      });
    });
  });

  describe('moveCard', () => {
    it('returns the correct action', () => {
      const action = moveCard({ id: 1 }, { id: 2 }, 3);

      expect(action).toEqual({
        type: 'MOVED_CARD',
        column: { id: 1 },
        card: { id: 2 },
        index: 3
      });
    });
  });
});
