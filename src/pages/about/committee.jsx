import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import SEO from '../../components/seo.jsx';
import Layout from '../../components/layout.jsx';

const isUndefined = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== null;

const Committee = ({
  data: {
    site: {
      siteMetadata: {
        committee: { year },
      },
    },
    allGoogleCommitteeSheet: { nodes: committee },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout>
    <SEO title="Committee" />
    <div className="Main">
      <div className="Page-Section">
        <h1>Please be nice to...</h1>
        <h2>The committee for the {year} Year!</h2>
        <div className="Committee-Box">
          {committee
            .filter(
              (member, index) =>
                index ===
                committee.findIndex(m => m.position === member.position && m.name === member.name),
            )
            .map(member => (
              <div className="Member" key={member.name + member.position}>
                {isUndefined(member, 'directImageURL') ? (
                  <img className="Member-Img" src={member.directImageURL} alt={member.name} />
                ) : (
                  <Img className="Member-Img" fluid={fluid} alt="no image found" />
                )}
                <div className="Member-Name">{member.name}</div>
                <div className="Member-Position">{member.position}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </Layout>
);

Committee.propTypes = {
  data: PropTypes.instanceOf({
    site: { siteMetadata: { committee: { year: PropTypes.string } } },
    allGoogleCommitteeSheet: { nodes: PropTypes.arrayOf(PropTypes.object) },
    file: PropTypes.object,
  }).isRequired,
};

export default Committee;
export const query = graphql`
  query {
    site {
      siteMetadata {
        committee {
          year
        }
      }
    }
    allGoogleCommitteeSheet {
      nodes {
        position
        directImageURL
        name
      }
    }
    file(relativePath: { eq: "glitch_brick.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
