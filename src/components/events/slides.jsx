import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Slides = ({ slides }) => (
  <div className="Events">
    <h5 className="Events-Header">View all our lovely slides from past events!</h5>
    {slides.map(slide => (
      <div key={slide.talkName} className="Event">
        <img className="Event-Featured" src={slide.slideDeckImageDIRECTURL} alt={slide.talkName} />
        <div className="Event-Info">
          <div className="Event-Heading">{slide.talkName}</div>
          <div className="Event-Tags">
            <span className="Event-Tag">
              <FontAwesomeIcon icon="user" />
              {slide.talkPresenter}
            </span>
            <span className="Event-Location">
              <FontAwesomeIcon icon="calendar" />
              {slide.talkDate}
            </span>
          </div>
          <a href={slide.link} style={{ marginTop: '1em' }}>
            <FontAwesomeIcon className="Icon" icon={['fab', 'slideshare']} />
            View Slides
          </a>
        </div>
      </div>
    ))}
  </div>
);

Slides.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};
