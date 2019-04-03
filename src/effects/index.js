import Api from '../data/api';
import { fetchedData } from "../actions";

const api = new Api();

async function loadCards(state, dispatch) {
  const cards = await api.getCards();

  dispatch(fetchedData('cards', cards));
}

async function loadBoards(state, dispatch) {
  const boards = await api.getBoards();

  dispatch(fetchedData('boards', boards));
}

async function loadInitialData(state, dispatch) {
  //await loadBoards(state, dispatch);
  //await loadCards(state, dispatch);
}

export default {
  APP_STARTED: loadInitialData
}
