import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Event, event } from './event.jsx';

export function Events({ title, events }) {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="Events">
      <h5 className="Events-Header">{title}</h5>
      {events.map(e => <Event key={e.name} event={e} />).slice(0, !viewAll ? 4 : events.length)}
      {events.length > 4 && !viewAll ? (
        <button
          type="button"
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

Events.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf({ event }).isRequired,
};
