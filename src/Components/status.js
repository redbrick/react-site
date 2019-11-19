import React from 'react';
import '../core.css';

class Status extends React.Component {

  render(){
  return (
    <div className="Status">
        <span className="Status-Text">
          <a href="https://github.com/redbrick"><i class="Icon fa fa-github"></i></a>
          <a href="https://www.facebook.com/dcuredbrick/"><i class="Icon fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/redbrickDCU/"><i class="Icon fa fa-instagram"></i></a>
          <a href="https://twitter.com/RedbrickDCU/"><i class="Icon fa fa-twitter"></i></a>
        </span>
        {/* ToDo: Add a fetch to check Statuses*/}
        <span className="Status-Text">All Services Are Currently Active</span>
        <div>
        </div>
    </div>
  );
}
}

export default Status;
