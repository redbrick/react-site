import React from 'react';
import '../core.css';
import {Link} from 'react-router-dom'



class About extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div className="Main">
    <h1>About</h1>
    <h2>What is Redbrick all about?</h2>
    <hr />
    <div className="Blocks">
        <div className="Block">
        <Link to="/About/The-Society">The Society</Link>
        </div>
        <div className="Block">
            <Link to="/About/Committee">Committee</Link>
        </div>
        <div className="Block">
            <Link to="/About/Constitution">Constitution</Link>
        </div>
        <div className="Block">
          <Link to="/About/Regulations">Regulations</Link>
        </div>
        <div className="Block">
          <Link to="/About/Contact">Contact</Link>
        </div>
        <div className="Block">
            <a href="https://wiki.redbrick.dcu.ie/mw/Committee">Past Committee</a>
        </div>
    </div>
    </div>
  );
}
}

export default About;
