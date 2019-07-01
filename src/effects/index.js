import Api from '../data/api';
import { fetchedCard } from '../actions';

const api = new Api();

async function loadInitialData(state, action, dispatch) { }

async function persistCardOrder(state, action, dispatch) {
  const card = state.data.cards.find(c => c.id === action.card.id);

  const updatedCard = await api.updateCard(card.id, {
    order: card.order
  });

  dispatch(
    fetchedCard(updatedCard)
  );
}

export default {
  APP_STARTED: loadInitialData,
  MOVED_CARD: persistCardOrder
}
