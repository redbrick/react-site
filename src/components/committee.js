import React from 'react';
import '../core.css';

const Committee = ({ members, year }) => (
  <div className="Main">
    <div className="Page-Section">
      <h1>Please be nice to...</h1>
      <h2>The committee for the {year} Year!</h2>
      <div className="Committee-Box">
        {members.map(member => (
          <div className="Member">
            <img
              src={
                Object.hasOwnProperty('image') && member.image !== undefined
                  ? member.image
                  : '/glitch_brick.png'
              }
              alt={'image of' + member.name}
            />
            <div className="Member-Name">{member.name}</div>
            <div className="Member-Position">{member.position}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Committee;
