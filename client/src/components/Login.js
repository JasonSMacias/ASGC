import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {

    state = {
      isLoggedIn: false,
      password: "",
      username: ""
    }

  render () {
    return (
      <React.Fragment>
        <Switch>
          <div className="level-right">
            <div className="level-item">
              {/* <p>Sign in stuff OR basic member information <br /> and link to dashboard</p>     */}
              <form className="field is-grouped-multiline box">
                <label className="label" htmlFor="username">Username </label>
                <div className="control">
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    // onChange={this.handleInputChange}
                    // className="form-control"
                    className="input is-dark is-rounded"
                    placeholder="Username"/>
                  {/* <small id="usernameHelp" className="form-text text-muted">Enter your username</small> */}
                </div>
                <br />
                <label className="label" htmlFor="password">Password  </label>
                <div className="control is-medium">
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="input is-dark is-rounded"
                    placeholder="Password"
                  />
                </div>
                <br />
                <div className="control">
                  <button type="submit" className="button is-dark is-rounded" onClick={this.login}>Login</button>
                </div>
              </form>

            </div>
          </div>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Login;