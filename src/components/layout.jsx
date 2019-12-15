import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faShareAltSquare,
  faFile,
  faPaste,
  faEnvelope,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from './navbar.jsx';
import Status from './status';
import './core.css';

library.add(fab, faShareAltSquare, faFile, faPaste, faEnvelope, faInfo);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Uptime {
        site {
          siteMetadata {
            uptimeRobot {
              apiKey
            }
            social {
              link
              icon
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { uptimeRobot, social },
      },
    }) => (
      <div className="Core">
        <Navbar />
        <div className="Right">
          <Status apiKey={uptimeRobot.apiKey} social={social} />
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Layout;
