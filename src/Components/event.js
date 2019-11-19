import React from 'react';
import '../core.css';

class Event extends React.Component {
  render(){
  return (
    <div className="Event">
        <img className="Event-Featured" src={this.props.event.image} alt={this.props.event.name} />
        <div className="Event-Info">
            <div className="Event-Heading">
                {this.props.event.name}
            </div>
            <div className="Event-Tags">
                <span className="Event-Tag"><i class="fa fa-tag"></i>{this.props.event.tag}</span>
                <span className="Event-Location"><i class="fa fa-location-arrow"></i>{this.props.event.location} @ {this.props.event.datetime}</span>
            </div>
            <div className="Event-Description">
                {this.props.event.description}
            </div>
            <a href={this.props.event.link}><i class="Icon fa fa-info-circle"></i>More Info</a>
        </div>
    </div>
  );
}
}

export default Event;
