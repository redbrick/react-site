import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Home from '../components/home.jsx';
import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';

import { getRandomImages } from '../utils/shuffle.js';

export default function Index({
  data: {
    site: {
      siteMetadata: { title, dataURL },
    },
  },
}) {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [slides, setSlides] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(dataURL)
      .then(resp => resp.json())
      .then(data => {
        setEvents(data[0]);
        setPastEvents(data[1]);
        setSlides(data[3]);
        setImages(data[4]);
      });
  }, [dataURL]);

  return (
    <Layout>
      <SEO title={title} />
      <Home
        images={getRandomImages(images, 18)}
        pastEvents={pastEvents}
        slides={slides}
        events={events}
        isEventsPage={false}
      />
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.instanceOf({
    site: { siteMetadata: { title: PropTypes.string, dataURL: PropTypes.string } },
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        dataURL
      }
    }
  }
`;
