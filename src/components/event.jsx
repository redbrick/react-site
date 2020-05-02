import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const event = {
  image: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  date__Time: PropTypes.string,
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
          <FontAwesomeIcon icon="tag" />
          {eventData.tag}
        </span>
        <span className="Event-Location">
          <FontAwesomeIcon icon="location-arrow" />
          {eventData.location} @ {eventData.date__Time}
        </span>
      </div>
      <div className="Event-Description">{eventData.description}</div>
      {eventData.lint === null ? (
        <></>
      ) : (
        <a href={eventData.link}>
          <FontAwesomeIcon icon="info-circle" className="Icon" />
          More Info
        </a>
      )}
    </div>
  </div>
);

Event.propTypes = {
  event: PropTypes.instanceOf(event).isRequired,
};

export default Event;
