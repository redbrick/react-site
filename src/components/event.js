import React from 'react';
import '../core.css';

const Event = ({ event }) => (
  <div className="Event">
    <img className="Event-Featured" src={event.image} alt={event.name} />
    <div className="Event-Info">
      <div className="Event-Heading">{event.name}</div>
      <div className="Event-Tags">
        <span className="Event-Tag">
          <i class="fa fa-tag" />
          {event.tag}
        </span>
        <span className="Event-Location">
          <i class="fa fa-location-arrow" />
          {event.location} @ {event.datetime}
        </span>
      </div>
      <div className="Event-Description">{event.description}</div>
      <a href={event.link}>
        <i class="Icon fa fa-info-circle" />
        More Info
      </a>
    </div>
  </div>
);

export default Event;
