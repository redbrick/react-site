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
  faTag,
  faLocationArrow,
  faInfoCircle,
  faUser,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from './navbar.jsx';
import Status from './status';
import './core.css';

library.add(
  fab,
  faShareAltSquare,
  faFile,
  faPaste,
  faEnvelope,
  faInfo,
  faTag,
  faLocationArrow,
  faInfoCircle,
  faUser,
  faCalendar,
);

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
      <div className="core">
        <Navbar />
        <div className="right">
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
