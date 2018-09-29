import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import TweetDetail from './TweetDetail';
import Login from './Login';
import Register from './Register'
import NotFound from './NotFound'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='content'>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/tweet/:id' exact component={ TweetDetail } />
            <Route path='/login' exact component={ Login } />
            <Route path='/register' exact component={ Register } />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Content;
