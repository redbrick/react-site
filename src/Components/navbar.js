import React from 'react';
import '../core.css';
import {Link, useRouteMatch} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }


  

  render(){

    let OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
      let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
      });
    
      return (
        <li className={match ? 'active' : 'inactive'}>
          {match && "> "}
          <Link to={to}>{label}</Link>
          </li>
      );
    }

  return (
    <div className="Navbar">
    <img className="Logo" src="/logo-light.png" />
      <ul>
          <OldSchoolMenuLink to="/" label="Home" activeOnlyWhenExact={true}></OldSchoolMenuLink>
          <OldSchoolMenuLink to="/Events" label="Events"></OldSchoolMenuLink>
          <OldSchoolMenuLink to="/About" label="About"></OldSchoolMenuLink>
          <OldSchoolMenuLink to="/Help" label="Help"></OldSchoolMenuLink>
          <OldSchoolMenuLink to="/Services" label="Services"></OldSchoolMenuLink>
          <li className="inactive">
            <a className="inactive" href="https://discord.gg/3aRU5BQ">
              Discord
            </a>
          </li>
      </ul>
    </div>
  );
}
}

export default Navbar;
