import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import Modal from '../components/Modal';

class Signup extends Component {
  
  state = {
    success: false,
    username: '',
    name: '',
    email: '',
    address: '',
    password: '',
    active: 'modal',
    modalContent: 'Sign up successful.  Log in to continue.',
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name] : value
    })
  }

  register = (e) => {
    e.preventDefault();
    API
      .register({ 
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        password: this.state.password 
        })
      .then(res => {
        console.log(res.data);
        this.activateModal(res.data);
        // this.setState({ success: res.data });
        
      })
      .catch(err => console.log(err.response.data));
  }

  close = () => {
    this.setState({active: "modal", success: true});
  };

  activateModal = (res) => {
    this.setState({
      active: "modal is-active",
      });
  };


  render() {
    if (this.state.success) {
      
      return <Redirect to ="/" />
    }

    return (
      <React.Fragment>
      <form className="field is-grouped-multiline box">
        <label className="label" htmlFor="username">Username</label>
        <div className="control">
          <input
            type="text"
            name="username"
            onChange={this.handleInputChange}          
            className="input is-dark is-rounded"
            placeholder="Username" />
          
        </div>
        <br />
        <label className="label" htmlFor="name">Name</label>
        <div className="control">
          <input
            type="text"
            name="name"

            onChange={this.handleInputChange}
            className="input is-dark is-rounded"
            placeholder="Name" />
          
        </div>
        <br />
        <label className="label" htmlFor="email">Email</label>
        <div className="control">
          <input
            type="email"
            name="email"

            onChange={this.handleInputChange}
            className="input is-dark is-rounded"
            placeholder="Email" />
          
        </div>
        <br />
        <label className="label" htmlFor="address">Address</label>
        <div className="control">
          <input
            type="text"
            name="address"

            onChange={this.handleInputChange}

            className="input is-dark is-rounded"
            placeholder="Address" />
        
        </div>
        <br />
        <label className="label" htmlFor="password">Password  </label>
        <div className="control is-medium">
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            className="input is-dark is-rounded"
            placeholder="Password"
          />
        </div>
        <br />
        <div className="control">
          <button type="submit" className="button is-dark is-rounded" onClick={this.register} >Sign Up</button>
        </div>
      </form>
      <Modal 
      close={this.close} 
      active={this.state.active} 
      username={this.state.username}
      // modalContent={this.state.modalContent} 
      modalContent='Sign up successful.  Log in to continue.'
      />
      </React.Fragment>
    );
  }
}

export default Signup;