import React from 'react';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='box'>
        <div className="tweet">
          <h2>Username</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni totam, ipsum, dolore iusto atque repellendus debitis, consectetur numquam odio.
          </p>
          <span>12 minutes ago</span>
          <div className="buttons">
            <button>Like</button>
            <button>Comments</button>
          </div>
          <form>
            <input type="text" placeholder="Say something..." />
          </form>
        </div>
      </div>
    );
  }
}

export default Tweet;
