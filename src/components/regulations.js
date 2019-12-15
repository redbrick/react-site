import React from 'react';
import displayRegulations from '../content/regulations';
import '../core.css';

const Regulations = () => (
  <div className="Main">
    <div className="Page-Section">{displayRegulations()}</div>
  </div>
);

export default Regulations;
