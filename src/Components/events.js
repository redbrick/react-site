import React from 'react';
import '../core.css';
import Event from './event';

class Events extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      viewAll: false
    }
  }

  viewAll = (e) => {
    e.preventDefault()
    this.setState({
      viewAll: true
    })
  }
  render(){

    const mapEvents = () => {
      let eventz = []
      this.props.events.map((event) => {
        eventz.push(
          <Event key={event.name} event={event}/>
        )
        return undefined
      })
      if(!this.state.viewAll)
        eventz.splice(4, eventz.length)
      return eventz
    }

  return (
    <div className="Events">
        <h5 className="Events-Header">{this.props.title}</h5>
        {mapEvents()}
        {this.props.events.length > 4 && !this.state.viewAll ? <button onClick={this.viewAll} className="Button">View All {this.props.title}</button> : ''}
    </div>
  );
}
}

export default Events;
