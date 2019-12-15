import React, { useState, useEffect } from 'react';
import '../../core.css';
import { ExternalLink } from '../externalLink';
import { getStatus } from './uptimeRobot.js';

export default function Status({ apiKey }) {
  const [statusMsg, setStatusMsg] = useState('');
  const [colour, setColour] = useState('green');

  useEffect(() => {
    getStatus(apiKey).then(({ colour, text }) => {
      setStatusMsg(text);
      setColour(colour);
    });
  }, [apiKey]);

  return (
    <div className="Status">
      <span className="Status-Text">
        <ExternalLink to="https://github.com/redbrick">
          <i className="Icon fa fa-github" />
        </ExternalLink>
        <ExternalLink to="https://www.facebook.com/dcuredbrick/">
          <i className="Icon fa fa-facebook" />
        </ExternalLink>
        <ExternalLink to="https://www.instagram.com/redbrickDCU/">
          <i className="Icon fa fa-instagram" />
        </ExternalLink>
        <ExternalLink to="https://twitter.com/RedbrickDCU/">
          <i className="Icon fa fa-twitter" />
        </ExternalLink>
      </span>
      <span className="Status-Text">
        <ExternalLink
          to="https://status.redbrick.dcu.ie"
          style={{ color: colour, textDecoration: 'none' }}
        >
          {statusMsg}
        </ExternalLink>
      </span>
      <div />
    </div>
  );
}
