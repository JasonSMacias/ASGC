import React from 'react';

function Masthead(props) {
  return (
  
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
            <h1 id="logo">Abstract Strategy <br /> Gamers Club</h1>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-right">
              <p>Sign in stuff OR basic member information <br /> and link to dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Masthead;