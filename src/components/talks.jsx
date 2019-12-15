import React from 'react';
import PropTypes from 'prop-types';

const Slides = ({ slides }) => (
  <div className="Events">
    <h5 className="Events-Header">View all our lovely slides from past events!</h5>
    {slides.map(slide => (
      <div key={slide.name} className="Event">
        <img className="Event-Featured" src={slide.image} alt={slide.name} />
        <div className="Event-Info">
          <div className="Event-Heading">{slide.name}</div>
          <div className="Event-Tags">
            <span className="Event-Tag">
              <i className="fa fa-user" />
              {slide.presenter}
            </span>
            <span className="Event-Location">
              <i className="fa fa-calendar" />
              {slide.date}
            </span>
          </div>
          <a href={slide.link} style={{ marginTop: '1em' }}>
            <i className="Icon fa fa-slideshare" />
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

export default Slides;
