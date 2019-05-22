import Adapter from './adapter';

async function createMockResponse(json) {
  const mockJsonPromise = Promise.resolve(json);

  return { ok: true, json: async() => JSON.parse(await mockJsonPromise) };
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer foobar123'
};

describe('Adapter', () => {
  beforeEach(() => {
    localStorage.setItem('token', 'foobar123');
  })

  describe('get', () => {
    it('makes a get request', async() => {
      jest.spyOn(global, 'fetch').mockImplementation(() => createMockResponse(`{
        "card": {
          "id": 1,
          "text": "Hello World"
        }
      }`));

      const data = await new Adapter().get('/cards');

      expect(data).toEqual({
        card: {
          id: 1,
          text: 'Hello World'
        }
      });

      expect(global.fetch).toHaveBeenCalledWith('https://my-board-api.herokuapp.com/cards', {
        body: null,
        headers,
        method: 'GET'
      });
    });

    describe('patch', () => {
      it('makes a get request', async() => {
        jest.spyOn(global, 'fetch').mockImplementation(() => createMockResponse(`{
          "card": {
            "id": 1,
            "text": "Hello World"
          }
        }`));

        const params = {
          card: {
            id: 1,
            text: 'Hello World'
          }
        };
        const data = await new Adapter().patch('/cards', params);

        expect(data).toEqual({
          card: {
            id: 1,
            text: 'Hello World'
          }
        });

        expect(global.fetch).toHaveBeenCalledWith('https://my-board-api.herokuapp.com/cards', {
          body: JSON.stringify(params),
          headers,
          method: 'PATCH'
        });
      });
    });

    describe('post', () => {
      it('makes a get request', async() => {
        jest.spyOn(global, 'fetch').mockImplementation(() => createMockResponse(`{
          "card": {
            "id": 1,
            "text": "Hello World"
          }
        }`));

        const params = {
          card: {
            id: 1,
            text: 'Hello World'
          }
        };
        const data = await new Adapter().post('/cards', params);

        expect(data).toEqual({
          card: {
            id: 1,
            text: 'Hello World'
          }
        });

        expect(global.fetch).toHaveBeenCalledWith('https://my-board-api.herokuapp.com/cards', {
          body: JSON.stringify(params),
          headers,
          method: 'POST'
        });
      });
    });
  });
});
