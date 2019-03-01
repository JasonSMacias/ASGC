import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = { users: []}

  componentDidMount() {
    fetch('api/users')
      .then(res => res.json())
      .then(users => this.setState ({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ol>
        {this.state.users.map(user => 
          <li key={user.id}>{user.user_name}, {user.address}</li>
        )}
        </ol>
      </div>
    );
  }
}

export default App;
