import axios from 'axios';

const apiUrl = 'https://every-apes-joke-172-116-44-177.loca.lt';

class Api {
  static async getEventsApi(limit = 15) {
    try {
      const response = await axios.get(`${apiUrl}/events`);
      return response.data;
    } catch (error) {
      console.log('Get Events Error: ', error.message);
      return error;
    }
  }

  static async postEventApi(event) {
    try {
      const response = await axios.post(`${apiUrl}/events`, event);
      return response.data;
    } catch (error) {
      console.log('Post Event Error: ', error.message);
      return error;
    }
  }
}

export default Api;
