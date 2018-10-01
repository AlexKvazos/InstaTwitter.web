import React from 'react';
import { Link } from 'react-router-dom';
import TweetActions from '../actions/TweetActions';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

class Home extends React.Component {
  state = {
    loggedIn: false,
    tweets: []
  }

  async componentDidMount() {
    let tweets = await TweetActions.getTweets();

    let loggedIn = localStorage.token;
    this.setState({ tweets, loggedIn });
  }

  onNewTweet = (tweet) => {
    let { tweets } = this.state;
    this.setState({ tweets: [tweet, ...tweets] });
  }

  render() {
    const { tweets, loggedIn } = this.state;

    return (
      <div>

        { loggedIn ? <NewTweet onNewTweet={this.onNewTweet} /> : (
          <Link to="/login">Log In</Link>
        ) }

        { tweets.map((tweet) => (
          <Tweet key={ tweet._id } tweet={ tweet } />
        )) }
      </div>
    );
  }
}

export default Home;
