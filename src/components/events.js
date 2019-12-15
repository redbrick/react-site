import React, { useState } from 'react';
import '../core.css';
import Event from './event';

export default function Events({ title, events }) {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="Events">
      <h5 className="Events-Header">{title}</h5>
      {events
        .map(event => <Event key={event.name} event={event} />)
        .slice(0, !viewAll ? 4 : events.length)}
      {events.length > 4 && !viewAll ? (
        <button
          onClick={e => {
            e.preventDefault();
            setViewAll(true);
          }}
          className="Button"
        >
          View All {title}
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
