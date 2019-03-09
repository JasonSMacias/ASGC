import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import API from '../utils/API';

class Login extends Component {

    state = {
      isLoggedIn: false,
      password: "",
      email: ""
    }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

 // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({email: this.state.email, password: this.state.password})
      .then(res => {
        console.log(res.data);
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
  }

  render () {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      console.log("it worked");
      // return <Redirect to ="/dashboard" />
    }
    return (
      <React.Fragment>
        {/* <p>Sign in stuff OR basic member information <br /> and link to dashboard</p>     */}
        {!this.state.isLoggedIn ?
          <div className="level-right">
            <div className="level-item">
              <form className="field is-grouped-multiline box">
                <label className="label" htmlFor="email">Email </label>
                <div className="control">
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    className="input is-dark is-rounded"
                    placeholder="Email"
                  />
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
        :
          <div className="level-right">
            <div className="level-item">
              <section className="field is-grouped-multiline box">
                <div>Logged in as {this.state.email}</div>
                <br />
                <div>
                  test content
                </div>
                <br />
                <div className="control">
                  <button type="submit" className="button is-dark is-rounded" onClick={console.log("clicked")}>Logout</button>
                </div>
              </section>

            </div>
          </div>
        }
        
      </React.Fragment>
    );
  }
}

export default Login;