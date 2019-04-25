import Adapter from "./adapter";

export default class Api {
  constructor(adapter) {
    this.adapter = adapter || new Adapter();
  }

  async createCard(boardId, color, text) {
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

  async getBoard(id) {
    const { board } = await this.adapter.get(`/boards/${id}`);

    return board;
  }

  async getBoards() {
    const { boards } = await this.adapter.get('/boards');

    return boards;
  }

  async getCards() {
    const { cards } = await this.adapter.get('/cards');

    return cards;
  }
}
