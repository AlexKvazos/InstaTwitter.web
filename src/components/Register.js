import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="auth">
            <h2>Register</h2>

            <form>
              <div className="input-group">
                <span>Email</span>
                <input type="email" />
              </div>

              <div className="input-group">
                <span>Username</span>
                <input type="text" />
              </div>

              <div className="input-group">
                <span>Password</span>
                <input type="password" />
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
