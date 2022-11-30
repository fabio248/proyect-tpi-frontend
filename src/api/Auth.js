import axios from 'axios';
export default class Auth {
  endpoint = 'https://proyecto-tpi.onrender.com/api/v1/auth';
  headers = {
    'Content-Type': 'application/json',
    api: '78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b',
  };

  async recoveryPassword(email) {
    try {
      const response = await axios.post(`${this.endpoint}/recovery`, email, {
        headers: this.headers,
      });
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
