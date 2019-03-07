import React from 'react';

const Signup = (props) => {
  
  // Not working :-/
  console.log(props);
  // this.setState ({ loginBoxPresent: false });

  return (
    <form className="field is-grouped-multiline box">
      <label className="label" htmlFor="username">Username</label>
      <div className="control">
        <input
          type="text"
          name="username"

          // onChange={this.handleInputChange}
          // className="form-control"
          className="input is-dark is-rounded"
          placeholder="Username" />
        
      </div>
      <br />
      <label className="label" htmlFor="name">Name</label>
      <div className="control">
        <input
          type="text"
          name="name"

          // onChange={this.handleInputChange}
          // className="form-control"
          className="input is-dark is-rounded"
          placeholder="Name" />
        
      </div>
      <br />
      <label className="label" htmlFor="email">Email</label>
      <div className="control">
        <input
          type="email"
          name="email"

          // onChange={this.handleInputChange}
          // className="form-control"
          className="input is-dark is-rounded"
          placeholder="Email" />
        
      </div>
      <br />
      <label className="label" htmlFor="address">Address</label>
      <div className="control">
        <input
          type="text"
          name="address"

          // onChange={this.handleInputChange}

          className="input is-dark is-rounded"
          placeholder="Address" />
       
      </div>
      <br />
      <label className="label" htmlFor="password">Password  </label>
      <div className="control is-medium">
        <input
          type="password"
          name="password"


          className="input is-dark is-rounded"
          placeholder="Password"
        />
      </div>
      <br />
      <div className="control">
        <button type="submit" className="button is-dark is-rounded" >Sign Up</button>
      </div>
    </form>
  );
}

export default Signup;