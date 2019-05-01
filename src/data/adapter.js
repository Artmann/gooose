export default  class Adapter {
  constructor() {
    const developmentUrl = 'http://localhost:3000';
    const productionUrl = 'https://my-board-api.herokuapp.com';

    this.baseUrl = process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl;
    this.baseUrl = productionUrl;
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
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      headers: this.headers()
    });
    const data = await response.json();

    return data;
  }

  async patch(path, params) {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      body: JSON.stringify(params),
      headers: this.headers(),
      method: 'PATCH'
    });
    const data = await response.json();

    return data;
  }

  async post(path, params) {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      body: JSON.stringify(params),
      headers: this.headers(),
      method: 'POST'
    });
    const data = await response.json();

    return data;
  }
}
