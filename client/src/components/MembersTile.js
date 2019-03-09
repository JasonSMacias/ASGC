import React from 'react';
import { Link } from "react-router-dom";

function MembersTile(props) {
  return (
    <section>
        <div className="box">
          <h2 className="section-head has-text-centered"><span className="icon has-text-black-bis"><i class="fas fa-brain"></i></span> <Link to='/members' className="lnk">Members</Link></h2> <hr />
          <p>This will have general info with a hamburger menu upper left</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem minus ea possimus debitis maxime minima, consequatur fuga natus rem dignissimos adipisci quasi pariatur vero sint, dolore voluptate excepturi nostrum ducimus.</p>
        </div>
    </section>
  );
}

export default MembersTile;