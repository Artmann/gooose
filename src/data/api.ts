import Adapter from "./adapter";
import pluralize from 'pluralize';

export default class Api {
  private adapter: Adapter;

  constructor(adapter?: Adapter) {
    this.adapter = adapter || new Adapter();
  }

  async createCard(boardId: number, text: string, color: string) {
    const { card } = await this.adapter.post('/cards', {
      card: {
        boardId,
        color,
        text
      }
    });

    return card;
  }

  async createSession(email: string, password: string) {
    const { session } = await this.adapter.post('/sessions', {
      email,
      password
    });

    return session;
  }

  async createUser(email: string, name: string, password: string) {
    const { user } = await this.adapter.post('/users', {
      user: {
        email,
        name,
        password
      }
    });

    return user;
  }

  async getBoard(id: number) {
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

  async find<T>(modelName: string, id: number): Promise<T> {
    const path = `/${pluralize(modelName)}`;
    const response = await this.adapter.get(path);
    const data = response[modelName];

    return data as T;
  }

  async findAll<T>(modelName: string): Promise<T[]> {
    const path = `/${pluralize(modelName)}`;
    const response = await this.adapter.get(path);
    const data = response[pluralize(modelName)];

    return data as T[];
  }

  async updateCard(id: number, data: object) {
    const { card } = await this.adapter.patch(`/cards/${id}`, {
      card: {
        ...data
      }
    });

    return card;
  }
}
