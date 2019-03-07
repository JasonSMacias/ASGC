import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Masthead from './components/Masthead';
import Home from './pages/Home';
import Games from './pages/Games';
import GamesSites from './pages/GameSites';
import UserDashboard from './pages/UserDashboard';
import Members from './pages/Members';

import './App.css';
import Axios from 'axios';

class App extends Component {
  state = { isLoggedIn: false }

// to get users: {this.state.users.map(user => <li key={user.id}>{user.user_name}, {user.address}</li>)}

  // componentDidMount() {
  //   Axios.get('api/users')
  //     .then(users => this.setState ({ users }))
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Masthead />
            <section className="section">
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/games" component={Games} />
                  <Route exact path="/game-sites" component={GamesSites} />
                  <Route exact path="/dashboard" component={UserDashboard} />
                  <Route exact path="/members" component={Members} />
                </Switch>
              </div>
            </section>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
