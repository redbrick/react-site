import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Home from '../components/home.jsx';
import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';

import { getRandomImages } from '../utils/shuffle.js';
import { eventPassed, eventUpcomming } from '../utils/events.js';

const Index = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    allGoogleEventsSheet: { nodes },
    allGoogleSlidesSheet,
    allGoogleImagesSheet,
  },
}) => (
  <Layout>
    <SEO title={title} />
    <Home
      images={getRandomImages(allGoogleImagesSheet.nodes, 18)}
      events={nodes.filter(eventUpcomming)}
      pastEvents={nodes.filter(eventPassed)}
      slides={allGoogleSlidesSheet.nodes}
      isEventsPage={false}
    />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.instanceOf({
    site: { siteMetadata: { title: PropTypes.string } },
    allGoogleEventsSheet: { nodes: PropTypes.arrayOf(PropTypes.object) },
    allGoogleSlidesSheet: { nodes: PropTypes.arrayOf(PropTypes.object) },
    allGoogleImagesSheet: { nodes: PropTypes.arrayOf({ uRL_: PropTypes.string }) },
  }).isRequired,
};

export default Index;
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGoogleEventsSheet {
      nodes {
        name
        date__Time
        location
        tag
        description
        link
        image
        isFinished_
      }
    }
    allGoogleSlidesSheet {
      nodes {
        slideDeckImageDIRECTURL
        slideLink
        talkDate
        talkPresenter
        talkName
      }
    }
    allGoogleImagesSheet {
      nodes {
        uRL_
      }
    }
  }
`;
