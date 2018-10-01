import axios from 'axios';

const TweetActions = {

  async getTweets() {
    const { BASE_URL } = window;
    let response = await axios.get(BASE_URL + '/api/tweets');
    return response.data;
  },

  async postTweet(tweet) {
    const { BASE_URL } = window;

    const options = {
      headers: {
        token: localStorage.token
      }
    };

    let response = await axios.post(BASE_URL + '/api/tweet', tweet, options);
    return response.data;
  }

};

export default TweetActions;
