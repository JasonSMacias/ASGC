import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import API from '../utils/API';
import Modal from './Modal';

class Login extends Component {

    state = {
      isLoggedIn: false,
      password: "",
      email: "",
      active: "modal",
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
      .catch(err => {
        console.log(err.response);
        this.setState({active: 'modal is-active'})  
      });
  }

  usercheck = () => {
    API
      .userCheck()
      .then(res => {
        // Start here ====================================================================
        // res is object that can be checked at 3001 api/users/status
        console.log("user check: "+ res);
      })

  }

  close = () => {
    this.setState({active: "modal", success: true});
  }

  render () {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      console.log("it worked");
      this.usercheck();
      // return <Redirect to ="/dashboard" />
    }
    return (
      <React.Fragment>
        {/* <p>Sign in stuff OR basic member information <br /> and link to dashboard</p>     */}
        {!this.state.isLoggedIn ?
          <React.Fragment>
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
                <div className="level">
                  {/* <div className="control"> */}
                    <div className="level-left">
                      <button type="submit" className="button is-dark is-rounded" onClick={this.login}>Log in</button>
                    </div>
                    <div className="level-right">
                      <Link to="/signup" className="button is-dark is-rounded">Sign up</Link>
                    </div>
                  {/* </div> */}
                </div>
              </form>

            </div>
          </div>
          <Modal 
          close={this.close} 
          active={this.state.active} 
          username={this.state.username}
          prefix=''
          asgc=''
          // modalContent={this.state.modalContent} 
          modalContent='Incorrect email or password.'
          />
          </React.Fragment>
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