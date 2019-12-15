import React from 'react';
import '../core.css';
import { Link, useRouteMatch } from 'react-router-dom';
import { ExternalLink } from './externalLink';

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? 'active' : 'inactive'}>
      {match && '> '}
      <Link to={to}>{label}</Link>
    </li>
  );
};

const Navbar = () => (
  <div className="Navbar">
    <img className="Logo" src="/logo-light.png" alt="Redbrick Logo" />
    <ul>
      <OldSchoolMenuLink to="/" label="Home" activeOnlyWhenExact={true} />
      <OldSchoolMenuLink to="/events" label="Events" />
      <OldSchoolMenuLink to="/about" label="About" />
      <OldSchoolMenuLink to="/help" label="Help" />
      <OldSchoolMenuLink to="/services" label="Services" />
      <li className="inactive">
        <ExternalLink className="inactive" to="https://discord.gg/3aRU5BQ">
          Discord
        </ExternalLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
