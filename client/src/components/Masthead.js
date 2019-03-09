import React from 'react';
import Logo from './Logo';
import Login from './Login';

const Masthead = (props) => {
  const loginBoxPresent = props.loginBoxPresent;
  console.log("loginboxpresent: "+loginBoxPresent);
  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <Logo />
          { loginBoxPresent ?
            <Login />
            : ""
          }
        </div>
      </div>
    </section>
  );
}

export default Masthead;