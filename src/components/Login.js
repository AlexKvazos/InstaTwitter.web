import React from 'react';
import { Link } from 'react-router-dom';
import SessionActions from '../actions/SessionActions';

class Login extends React.Component {
  state = {
    email: '',
    username: '',
    password: ''
  }

  onChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    SessionActions.login(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="auth">
            <h2>Login</h2>

            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <span>Email</span>
                <input name="email" type="email" />
              </div>

              <div className="input-group">
                <span>Password</span>
                <input name="password" type="password" />
              </div>

              <div className="input-group">
                <button type="submit">Login</button>
              </div>
            </form>

          </div>
        </div>
        <span className='footnote center'>
          No account yet? <Link to="/register">Register</Link>
        </span>
      </div>
    );
  }
}

export default Login;
