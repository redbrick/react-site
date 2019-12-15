import React from 'react';
import PropTypes from 'prop-types';

export const event = {
  image: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  datetime: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

const Event = ({ event: eventData }) => (
  <div className="Event">
    <img className="Event-Featured" src={eventData.image} alt={eventData.name} />
    <div className="Event-Info">
      <div className="Event-Heading">{eventData.name}</div>
      <div className="Event-Tags">
        <span className="Event-Tag">
          <i className="fa fa-tag" />
          {eventData.tag}
        </span>
        <span className="Event-Location">
          <i className="fa fa-location-arrow" />
          {eventData.location} @ {eventData.datetime}
        </span>
      </div>
      <div className="Event-Description">{eventData.description}</div>
      <a href={eventData.link}>
        <i className="Icon fa fa-info-circle" />
        More Info
      </a>
    </div>
  </div>
);

Event.propTypes = {
  event: PropTypes.instanceOf(event).isRequired,
};

export default Event;
