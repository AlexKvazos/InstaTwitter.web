import axios from 'axios';

const SessionActions = {

  async login(user) {
    const { BASE_URL } = window;
    let response = await axios.post(BASE_URL + '/api/login', user);

    if (response.data.error) {
      alert(response.data.error);
      return;
    }

    localStorage.token = response.data.token;
    window.location = '/';
    return response.data;
  },

  async register(user) {
    const { BASE_URL } = window;
    let response = await axios.post(BASE_URL + '/api/register', user);

    if (response.data.error) {
      alert(response.data.error);
      return;
    }

    localStorage.token = response.data.token;
    window.location = '/';
    return response.data;
  },

};

export default SessionActions;
