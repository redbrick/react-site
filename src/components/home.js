import React, { useState } from 'react';
import '../core.css';
import Events from './events';
import Slides from './talks';
import ImageGrid from './imageGrid';

const active = (tab, id) => (tab === id ? 'Tab Tab-Active' : 'Tab');

export default function Home({ images, isEventsPage, events, pastEvents, slides }) {
  const [tab, setTab] = useState(0);

  const tabHandler = e => {
    e.preventDefault();
    setTab(parseInt(e.target.getAttribute('tab'), 10));
  };

  function displayTab(tab) {
    switch (tab) {
      case 0:
        return <Events events={events} title={'Upcoming Events'} />;
      case 1:
        return <Events events={pastEvents} title={'Past Events'} />;
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
        <li tab={0} className={active(tab, 0)} onClick={tabHandler}>
          Events
        </li>
        <li tab={1} className={active(tab, 1)} onClick={tabHandler}>
          Past Events
        </li>
        <li tab={2} className={active(tab, 2)} onClick={tabHandler}>
          Talk Slides
        </li>
      </ul>
      {displayTab(tab)}
    </div>
  );
}
