import React from 'react';
import '../core.css';
import Events from './events';
import Slides from './Talks';
import ImageGrid from './imagegrid'

class Home extends React.Component {
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
    <h1>Welcome</h1>
    <h2>{this.props.isEventsPage ? 'View our latest events here!' : "We are DCU's Computer Networking Society"}</h2>
    {this.props.images ? <ImageGrid images={this.props.images} /> : ''}
    <ul className="Tabs">
        <li tab={0} className={this.state.tab === 0 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Events</li>
        <li tab={1} className={this.state.tab === 1 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Past Events</li>
        <li tab={2} className={this.state.tab === 2 ? 'Tab Tab-Active' : 'Tab'} onClick={this.tabHandler}>Talk Slides</li>
    </ul>
    {this.state.tab === 0 ? <Events events={this.props.events} title={"Upcoming Events"} /> : ''}
    {this.state.tab === 1 ? <Events events={this.props.pastEvents} title={"Past Events"} /> : ''}
    {this.state.tab === 2 ? <Slides slides={this.props.slides} /> : ''}
    
    
    </div>
  );
}
}

export default Home;
