import Api from '../data/api';
import { fetchedCard } from '../actions';

const api = new Api();

async function loadInitialData(state, action, dispatch) { }

async function persistCardOrder({ data: { cards } }, { card, column }, dispatch) {
  const dirtyCards = cards.filter(c => c.columnId === column.id || c.columnId === card.columnId);

  for (let i = 0; i < dirtyCards.length; i++) {
    const updatedCard = await api.updateCard(cards[i].id, {
      order: cards[i].order
    });

    fetchedCard(updatedCard);
  }
}

export default {
  APP_STARTED: loadInitialData,
  MOVED_CARD: persistCardOrder
}
