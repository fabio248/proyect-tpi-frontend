import axios from 'axios';
import { URL_API } from './config';
export default class Auth {
  endpoint = `${URL_API}/auth`;
  headers = {
    'Content-Type': 'application/json',
    api: '78b96cea5c47cf11ae257dd16dd09e809f5bb205c29db1fdde1a33bede7e873b',
  };

  async recoveryPassword(email) {
    try {
      const response = await axios.post(`${this.endpoint}/recovery`, email, {
        headers: this.headers,
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async changePassword(newPassword, token) {
    try {
      const response = await axios.post(
        `${this.endpoint}/change-password`,
        {
          token,
          newPassword,
        },
        {
          headers: this.headers,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
