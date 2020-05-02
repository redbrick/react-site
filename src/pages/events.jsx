import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Home from '../components/home.jsx';
import { eventPassed, eventUpcomming } from '../utils/events.js';

const Events = ({
  data: {
    allGoogleEventsSheet: { nodes },
    allGoogleSlidesSheet,
  },
}) => (
  <Layout>
    <SEO title="Events" />
    <Home
      events={nodes.filter(eventUpcomming)}
      pastEvents={nodes.filter(eventPassed)}
      slides={allGoogleSlidesSheet.nodes}
      isEventsPage
    />
  </Layout>
);

Events.propTypes = {
  data: PropTypes.instanceOf({
    allGoogleEventsSheet: { nodes: PropTypes.arrayOf(PropTypes.object) },
    allGoogleSlidesSheet: { nodes: PropTypes.arrayOf(PropTypes.object) },
  }).isRequired,
};

export default Events;
export const query = graphql`
  query {
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
  }
`;
