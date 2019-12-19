import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Home from '../components/home.jsx';

export default function Events({
  data: {
    site: {
      siteMetadata: { dataURL },
    },
  },
}) {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch(dataURL)
      .then(resp => resp.json())
      .then(data => {
        setEvents(data[0]);
        setPastEvents(data[1]);
        setSlides(data[3]);
      });
  }, [dataURL]);

  return (
    <Layout>
      <SEO title="Events" />
      <Home events={events} pastEvents={pastEvents} slides={slides} isEventsPage />
    </Layout>
  );
}

Events.propTypes = {
  data: PropTypes.instanceOf({
    site: { siteMetadata: { dataURL: PropTypes.string } },
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        dataURL
      }
    }
  }
`;
