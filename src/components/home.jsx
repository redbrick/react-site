import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Events, Slides, event } from './events';
import ImageGrid from './imageGrid.jsx';

const active = (tab, id) => (tab === id ? 'Tab Tab-Active' : 'Tab');

export default function Home({ images, isEventsPage, events, pastEvents, slides }) {
  const [tab, setTab] = useState(0);

  const tabHandler = e => {
    e.preventDefault();
    setTab(parseInt(e.target.getAttribute('tab'), 10));
  };

  const handleKeyPress = () => {};

  function displayTab(currentTab) {
    switch (currentTab) {
      case 0:
        return <Events events={events} title="Upcoming Events" />;
      case 1:
        return <Events events={pastEvents} title="Past Events" />;
      case 2:
        return <Slides slides={slides} />;
      default:
        return <></>;
    }
  }

  return (
    <div className="Main">
      <h1>Welcome</h1>
      <h2>
        {isEventsPage ? 'View our latest events here!' : "We are DCU's Computer Networking Society"}
      </h2>
      <ImageGrid images={images} />
      <ul className="Tabs">
        <li className={active(tab, 0)}>
          <div tab={0} tabIndex={0} role="button" onClick={tabHandler} onKeyPress={handleKeyPress}>
            Events
          </div>
        </li>
        <li className={active(tab, 1)}>
          <div tab={1} tabIndex={-1} role="button" onClick={tabHandler} onKeyPress={handleKeyPress}>
            Past Events
          </div>
        </li>
        <li className={active(tab, 2)}>
          <div tab={2} tabIndex={-2} role="button" onClick={tabHandler} onKeyPress={handleKeyPress}>
            Talk Slides
          </div>
        </li>
      </ul>
      {displayTab(tab)}
    </div>
  );
}

Home.propTypes = {
  images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  isEventsPage: PropTypes.bool,
  events: PropTypes.arrayOf({ event }).isRequired,
  pastEvents: PropTypes.arrayOf({ event }).isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Home.defaultProps = {
  isEventsPage: false,
  images: [],
};
