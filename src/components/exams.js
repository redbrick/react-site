import React from 'react';
import '../core.css';
import { ExternalLink } from './externalLink';

const Exams = () => (
  <div className="Main Page-Section">
    <h1>Past Exams</h1>
    <p>
      If you are thinking of running for the position of Admin, Webmaster or Helpdesk you must first
      pass an exam.
    </p>
    <p>
      All past examinations are hosted on Github -{' '}
      <ExternalLink to="https://github.com/theycallmemac/redbrick-admin-exams">Here</ExternalLink>
    </p>
  </div>
);

export default Exams;
