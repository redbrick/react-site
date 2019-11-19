import React from 'react';
import '../core.css';


class Exams extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: -1
    }
  }
  render(){
    
  return (
    <div className="Main Page-Section">
      <h1>Past Exams</h1>
      <p>
      If you are thinking of running for the position of Admin, Webmaster or Helpdesk you must first pass an exam.
      </p>
      <p>
          All past examinations are hosted on Github - <a href="https://github.com/redbrick/past-exams">Here</a>
      </p>
    </div>
  );
}
}

export default Exams;