export default  class Adapter {
  constructor() {
    const developmentUrl = 'http://localhost:3000';
    const productionUrl = 'https://my-board-api.herokuapp.com';

    this.baseUrl = process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl;
    this.baseUrl = productionUrl;
    this.baseUrl = developmentUrl;
  }

  headers() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const token = localStorage.getItem('token');

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  async get(path) {
    return await this._request('GET', path);
  }

  async patch(path, params) {
    return await this._request('PATCH', path, params);
  }

  async post(path, params) {
    return await this._request('POST', path, params);
  }

  async _request(method, path, params = null) {
    const url = `${this.baseUrl}${path}`;

    const response = await fetch(url, {
      body: params ? JSON.stringify(params) : null,
      headers: this.headers(),
      method
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors[0]);
    }

    return data;
  }
}
