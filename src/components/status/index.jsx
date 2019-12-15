import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { ExternalLink } from '../externalLink.jsx';
import { getStatus, ok } from './uptimeRobot.js';

export default function Status({ apiKey, social }) {
  const [statusMsg, setStatusMsg] = useState(ok.text);
  const [colour, setColour] = useState(ok.colour);

  useEffect(() => {
    getStatus(apiKey).then(({ colour: col, text }) => {
      setStatusMsg(text);
      setColour(col);
    });
  }, [apiKey]);

  return (
    <div className="Status">
      <span className="Status-Text">
        {social.map(({ link, icon }) => (
          <ExternalLink to={link} key={link}>
            <FontAwesomeIcon icon={['fab', icon]} className="Icon" />
          </ExternalLink>
        ))}
      </span>
      <span className="Status-Text">
        <ExternalLink
          to="https://status.redbrick.dcu.ie"
          style={{ color: colour, textDecoration: 'none' }}
        >
          {statusMsg}
        </ExternalLink>
      </span>
    </div>
  );
}

Status.propTypes = {
  apiKey: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
};
