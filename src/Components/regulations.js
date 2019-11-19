import React from 'react';
import '../core.css';
import displayRegulations from './About/regulations'

class Regulations extends React.Component {

  render(){
  return (
    <div className="Main">
        <div className="Page-Section">
            {displayRegulations()}
        </div>
    </div>
  );
}
}

export default Regulations;
