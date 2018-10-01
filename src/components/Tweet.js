import React from 'react';
import moment from 'moment';

const Tweet = ({ tweet }) => (
  <div className='box'>
    <div className="tweet">
      <h2>{ tweet.user ? tweet.user.username : 'Anonymous' }</h2>
      <p>{ tweet.body }</p>
      <span>{ moment(tweet.createdAt).fromNow() }</span>
      <div className="buttons">
        <button>Like</button>
        <button>Comments</button>
      </div>
      <form>
        <input type="text" placeholder="Say something..." />
      </form>
    </div>
  </div>
)

export default Tweet;
