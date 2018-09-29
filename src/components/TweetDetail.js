import React from 'react';
import Tweet from './Tweet';
import Comments from './Comments';

class TweetDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tweet />
        <Comments />
      </div>
    );
  }
}

export default TweetDetail;
