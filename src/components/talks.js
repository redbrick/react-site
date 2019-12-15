import React from 'react';
import '../core.css';

const Slides = ({ slides }) => (
  <div className="Events">
    <h5 className="Events-Header">View all our lovely slides from past events!</h5>
    {slides.map(slide => (
      <div className="Event">
        <img className="Event-Featured" src={slide.image} alt={slide.name} />
        <div className="Event-Info">
          <div className="Event-Heading">{slide.name}</div>
          <div className="Event-Tags">
            <span className="Event-Tag">
              <i class="fa fa-user" />
              {slide.presenter}
            </span>
            <span className="Event-Location">
              <i class="fa fa-calendar" />
              {slide.date}
            </span>
          </div>
          <a href={slide.link} style={{ marginTop: '1em' }}>
            <i class="Icon fa fa-slideshare" />
            View Slides
          </a>
        </div>
      </div>
    ))}
  </div>
);

export default Slides;
