import React from 'react';
import { Link } from 'react-router-dom';
import SessionActions from '../actions/SessionActions';

class Register extends React.Component {
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
    SessionActions.register(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="auth">
            <h2>Register</h2>

            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <span>Email</span>
                <input
                  onChange={this.onChange}
                  name="email"
                  type="email" />
              </div>

              <div className="input-group">
                <span>Username</span>
                <input
                  onChange={this.onChange}
                  name="username"
                  type="text" />
              </div>

              <div className="input-group">
                <span>Password</span>
                <input
                  onChange={this.onChange}
                  name="password"
                  type="password" />
              </div>

              <div className="input-group">
                <button type="submit">Register</button>
              </div>
            </form>

          </div>
        </div>
        <span className='footnote center'>
          Already have an account? <Link to="/login">Log In</Link>
        </span>
      </div>
    );
  }
}

export default Register;
