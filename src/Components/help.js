import React from 'react';
import '../core.css';
import helpdeskTab from './About/helpdesk';
import servicesTab from './About/services';

import Page from './page';
import Exams from './exams';
import Joining from './joining';

class Help extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tab: 0
    }
  }


  tabHandler = (e) => {
    e.preventDefault()
    this.setState({
      tab: Number(e.target.getAttribute("tab"))
    })
  }

  render(){
  return (
    <div className="Main">
    <h1>So you need help..?</h1>
    <h2>Select a tab below for assistance!</h2>
    <ul className="Tabs">
        <li tab={0} className={this.state.tab === 0 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Services</li>
        <li tab={1} className={this.state.tab === 1 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Helpdesk</li>
        <li tab={2} className={this.state.tab === 2 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Joining Redbrick</li>
        <li tab={3} className={this.state.tab === 3 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Past Exams</li>
    </ul>
    {this.state.tab === 0 ? <Page page={servicesTab} /> : ''}
    {this.state.tab === 1 ? <Page page={helpdeskTab} /> : ''}
    {this.state.tab === 2 ? <Joining /> : ''}
    {this.state.tab === 3 ? <Exams /> : ''}
    </div>
  );
}
}

export default Help;
;