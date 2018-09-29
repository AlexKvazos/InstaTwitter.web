import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="auth">
            <h2>Login</h2>

            <form>
              <div className="input-group">
                <span>Email</span>
                <input type="email" />
              </div>

              <div className="input-group">
                <span>Password</span>
                <input type="password" />
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
