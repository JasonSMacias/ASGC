import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Heading from './pages/dashboard/';

import './App.css';

class App extends Component {
  state = { users: []}

// to get users: {this.state.users.map(user => <li key={user.id}>{user.user_name}, {user.address}</li>)}

  componentDidMount() {
    fetch('api/users')
      .then(res => res.json())
      .then(users => this.setState ({ users }));
  }

  render() {
    return (
      <Route>

      </Route>
    );
  }
}

export default App;
