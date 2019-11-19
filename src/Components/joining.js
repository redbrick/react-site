import React from 'react';
import '../core.css';


class Joining extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    
  return (
    <div className="Main Page-Section">
      <h1>Joining Redbrick</h1>
      <h2>So you want to be a brickie?</h2>
      <p>
      Membership is open to all past and present students and staff of Dublin City University, and St. Pat’s, Drumcondra.
      </p>
      <h2>Costs</h2>
      <p>
          <ul>
              <li>Students - €4</li>
              <li>Staff - €8</li>
              <li>Associates - €8</li>
          </ul>
      </p>
      <h2>Paying Online</h2>
      <p>If you want to pay online, you can pay via paypal. Send the amount to the paypal address - accounts@redbrick.dcu.ie. Then send an email to admins@redbrick.dcu.ie with your:
          <ul>
              <li>Transaction Number</li>
              <li>Your username</li>
              <li>Your student/staff number if you are a new member</li>
          </ul>
      </p>
      <p>Alternatively you can pay by bank transfer. Similarly get in touch with the <a href="mailto:treaurer@redbrick.dcu.ie">treasurer</a> upon payment.</p>
        <code>a/c name: DCU Redbrick Society</code>
        <code>IBAN: IE59BOFI90675027999600</code>
        <code>BIC: BOFIIE2D</code>
        <code>a/c number: 27999600</code>
        <code>sort code: 90 - 67 - 50</code>
      <h2>What username can I have?</h2>
      <p>
      Almost anything you want - providing the username is available and no more than eight characters in length!
      </p>
    </div>
  );
}
}

export default Joining;