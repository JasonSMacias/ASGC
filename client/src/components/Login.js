import React, {Component} from 'react';

class Login extends Component {

    state = {
      isLoggedIn: false,
      password: "",
      username: ""
    }

  render () {
    return (
      <div className="level-right">
        <div className="level-item has-text-right">
          {/* <p>Sign in stuff OR basic member information <br /> and link to dashboard</p>     */}
          <form>
            <label className="label" htmlFor="username">Username </label>
            <div className="control">
              <input
                type="text"
                name="username"
                value={this.state.username}
                // onChange={this.handleInputChange}
                // className="form-control"
                placeholder="Username"/>
              {/* <small id="usernameHelp" className="form-text text-muted">Enter your username</small> */}
            </div>
            <br />
            <label className="label" htmlFor="password">Password  </label>
              <div className="control">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
            <br /><br />
            <button type="submit" className="button is-dark" onClick={this.login}>Login</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default Login;