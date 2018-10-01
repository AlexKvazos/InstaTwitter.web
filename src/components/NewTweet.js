import React from 'react';
import TweetActions from '../actions/TweetActions';

class CreateTweet extends React.Component {
  state = {
    tweetLength: 0
  }

  onSubmit = async (event) => {
    const body = this.state.tweetBody;

    event.preventDefault();
    let tweet = { body };
    let newTweet = await TweetActions.postTweet(tweet);
    this.props.onNewTweet(newTweet);
    this.setState({ tweetBody: '', tweetLength: 0 });
  }

  onTweetChange = (event) => {
    const { value } = event.target;

    let tweetLength = value.length;
    let tweetBody = value;

    if (tweetLength > 140) return;
    this.setState({ tweetLength, tweetBody });
  }

  render() {
    const { tweetLength, tweetBody } = this.state;

    return (
      <div className='box'>
        <div className="new-tweet">
          <h3>New Tweet</h3>
          <form onSubmit={this.onSubmit}>
            <textarea value={ tweetBody } onInput={this.onTweetChange} placeholder="Say something to your followers..." rows="4"></textarea>
            <div className="buttons">
              <span>{ tweetLength }/140</span>
              <button type="submit">Tweet</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTweet;
