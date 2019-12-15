import React from 'react';
import '../core.css';
import displayConstitution from '../content/constitution';

const Constitution = () => (
  <div className="Main">
    <div className="Page-Section">{displayConstitution()}</div>
  </div>
);

export default Constitution;
