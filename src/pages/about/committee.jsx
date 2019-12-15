import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import SEO from '../../components/seo.jsx';
import Layout from '../../components/layout.jsx';

export default function Committee({
  data: {
    site: {
      siteMetadata: {
        dataURL,
        committee: { year },
      },
    },
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  const [committee, setCommittee] = useState([]);
  useEffect(() => {
    fetch(dataURL)
      .then(resp => resp.json())
      .then(data => {
        setCommittee(data[2]);
      });
  }, [dataURL]);

  return (
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
                  committee.findIndex(
                    m => m.position === member.position && m.name === member.name,
                  ),
              )
              .map(member => (
                <div className="Member" key={member.name + member.position}>
                  {Object.prototype.hasOwnProperty.call(member, 'image') &&
                  member.image !== undefined ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <Img fluid={fluid} alt="no image found" />
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
}

Committee.propTypes = {
  data: PropTypes.instanceOf({
    site: { siteMetadata: { dataURL: PropTypes.string, committee: { year: PropTypes.string } } },
    file: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        dataURL
        committee {
          year
        }
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
