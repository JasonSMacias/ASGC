import React from 'react';
import Logo from './Logo';
import Login from './Login';

function Masthead(props) {
  return (
  
    <section className="section">
      <div className="container">
        <div className="level">
          <Logo />
          <Login />
        </div>
      </div>
    </section>
  );
}

export default Masthead;