import Adapter from './adapter';
import pluralize from 'pluralize';

function buildUrl(modelName, id) {
  const resourceName = pluralize(modelName);

  return id ? `/${resourceName}/${id}` : `/${resourceName}`;
}

export default class Api {
  constructor(adapter) {
    this.adapter = adapter || new Adapter();
  }

  async createCard(boardId, text, color) {
    const { card } = await this.adapter.post('/cards', {
      card: {
        boardId,
        color,
        text
      }
    });

    return card;
  }

  async createSession(email, password) {
    const { session } = await this.adapter.post('/sessions', {
      email,
      password
    });

    return session;
  }

  async createUser(email, name, password) {
    const { user } = await this.adapter.post('/users', {
      user: {
        email,
        name,
        password
      }
    });

    return user;
  }

  async fetchResource(modelName, id) {
    const url = buildUrl(modelName, id);

    const data = await this.adapter.get(url);

    return data[modelName];
  }

  async getBoard(id) {
    const { board } = await this.adapter.get(`/boards/${id}`);

    return board;
  }

  async getBoards() {
    const { boards } = await this.adapter.get('/boards');

    return boards;
  }

  async getCard(id) {
    const { card } = await this.adapter.get(`/cards/${id}`);

    return card;
  }

  async getCards() {
    const { cards } = await this.adapter.get('/cards');

    return cards;
  }

  async updateCard(id, data) {
    const { card } = await this.adapter.patch(`/cards/${id}`, {
      card: {
        ...data
      }
    });

    return card;
  }
}
