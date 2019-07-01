import { moveCard } from '../actions';
import reducer from './data';

describe('data', () => {
  describe('move card', () => {
    it('preserves the cards', () => {
      const card1 = { id: 1, order: 0 };
      const card2 = { id: 2, order: 0 };
      const card3 = { id: 3, order: 0 };

      const state = {
        boards: [],
        cards: [ card1, card2, card3 ]
      };

      const newState = reducer(state, moveCard({}, card1, 2));

      expect(newState.cards.map(c => c.id)).toEqual([1, 2, 3]);
    });

    it('can move a card one step down', () => {
      const card1 = { id: 1, order: 0 };
      const card2 = { id: 2, order: 1 };
      const card3 = { id: 3, order: 2 };

      const state = {
        boards: [],
        cards: [ card1, card2, card3 ]
      };

      const newState = reducer(state, moveCard({}, card1, 1));

      expect(newState.cards).toEqual([
        { id: 2, order: 1 },
        { id: 1, order: 1.5 },
        { id: 3, order: 2 }
      ]);
    });

    it('can move a card to the end', () => {
      const card1 = { id: 1, order: 0 };
      const card2 = { id: 2, order: 1 };
      const card3 = { id: 3, order: 2 };

      const state = {
        boards: [],
        cards: [ card1, card2, card3 ]
      };

      const newState = reducer(state, moveCard({}, card1, 2));

      expect(newState.cards).toEqual([
        { id: 2, order: 1 },
        { id: 3, order: 2 },
        { id: 1, order: 3 }
      ]);
    });

    it('can move a card up', () => {
      const card1 = { id: 1, order: 0, columnId: 1 };
      const card2 = { id: 2, order: 1, columnId: 1 };
      const card3 = { id: 3, order: 2, columnId: 1 };
      const card4 = { id: 4, order: 3, columnId: 1 };
      const card5 = { id: 5, order: 2, columnId: 2 };

      const state = {
        boards: [],
        cards: [ card1, card2, card3, card4, card5 ]
      };

      const newState = reducer(state, moveCard({ id: 1 }, card4, 1));

      expect(newState.cards).toEqual([
        { id: 1, order: 0, columnId: 1 },
        { id: 4, order: 0.5, columnId: 1 },
        { id: 2, order: 1, columnId: 1 },
        { id: 3, order: 2, columnId: 1 },
        { id: 5, order: 2, columnId: 2 }
      ]);
    });
  });
});
