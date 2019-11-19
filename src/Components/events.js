import React from 'react';
import '../core.css';
import Event from './event';

class Events extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    const mapEvents = () => {
      let eventz = []
      this.props.events.map((event) => {
        eventz.push(
          <Event key={event.name} event={event}/>
        )
      })
      return eventz
    }

  return (
    <div className="Events">
        <h5 className="Events-Header">{this.props.title}</h5>
        {mapEvents()}
    </div>
  );
}
}

export default Events;
