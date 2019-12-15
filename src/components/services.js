import React from 'react';
import '../core.css';
import { ExternalLink } from './externalLink';

const Services = () => (
  <div className="Main">
    <h1>Services</h1>
    <h2>We run lots of useful services! Quicklinks below...</h2>
    <hr />
    <div className="Blocks">
      <ExternalLink to="https://git.redbrick.dcu.ie">
        <div className="Block">
          <i className="fa fa-git" /> Git
        </div>
      </ExternalLink>
      <ExternalLink to="https://webmail.redbrick.dcu.ie">
        <div className="Block">
          <i className="fa fa-envelope" /> Mail
        </div>
      </ExternalLink>
      <ExternalLink to="https://wiki.redbrick.dcu.ie">
        <div className="Block">
          <i className="fa fa-info" /> Wiki
        </div>
      </ExternalLink>
      <ExternalLink to="https://paste.redbrick.dcu.ie">
        <div className="Block">
          <i className="fa fa-paste" /> Hastebin
        </div>
      </ExternalLink>
      <ExternalLink to="https://md.redbrick.dcu.ie">
        <div className="Block">
          <i className="fa fa-file" /> HackMD
        </div>
      </ExternalLink>
      <ExternalLink to="https://mastodon.redbrick.dcu.ie">
        <div className="Block">
          <i className="fa fa-share-alt-square" /> Mastodon
        </div>
      </ExternalLink>
    </div>
  </div>
);

export default Services;
