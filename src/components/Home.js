import React from 'react';
import NewTweet from './NewTweet';
import Tweet from './Tweet';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewTweet />
        <Tweet />
      </div>
    );
  }
}

export default Home;
