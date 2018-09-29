import React from 'react';

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='box'>
        <div className="new-tweet">
          <h3>New Tweet</h3>
          <form>
            <textarea placeholder="Say something to your followers..." rows="4"></textarea>
            <div className="buttons">
              <span>0/140</span>
              <button type="submit">Tweet</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTweet;
