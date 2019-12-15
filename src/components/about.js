import React from 'react';
import '../core.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from './externalLink';

const About = () => (
  <div className="Main">
    <h1>About</h1>
    <h2>What is Redbrick all about?</h2>
    <hr />
    <div className="Blocks">
      <Link to="/about/society">
        <div className="Block">The Society</div>
      </Link>
      <Link to="/about/committee">
        <div className="Block">Committee</div>
      </Link>
      <Link to="/about/constitution">
        <div className="Block">Constitution</div>
      </Link>
      <Link to="/about/regulations">
        <div className="Block">Regulations</div>
      </Link>
      <Link to="/about/contact">
        <div className="Block">Contact</div>
      </Link>
      <ExternalLink to="https://wiki.redbrick.dcu.ie/index.php/Committee_Timeline">
        <div className="Block">Past Committee</div>
      </ExternalLink>
    </div>
  </div>
);

export default About;
