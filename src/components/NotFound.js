import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='center'>
        <h1>404</h1>
        <h3>Not Found</h3>
      </div>
    );
  }
}

export default NotFound;
