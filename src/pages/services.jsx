import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from '../components/externalLink.jsx';
import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';

function getIcon(icon) {
  const iconArray = icon.split(' ');
  return iconArray.length === 1 ? iconArray[0] : iconArray;
}

const Services = ({
  data: {
    site: {
      siteMetadata: { services },
    },
  },
}) => (
  <Layout>
    <SEO title="Services" />
    <div className="Main">
      <h1>Services</h1>
      <h2>We run lots of useful services! Quicklinks below...</h2>
      <hr />
      <div className="Blocks">
        {services.map(({ link, icon, label }) => (
          <ExternalLink to={link} key={link}>
            <div className="Block">
              <FontAwesomeIcon icon={getIcon(icon)} /> {label}
            </div>
          </ExternalLink>
        ))}
      </div>
    </div>
  </Layout>
);

Services.propTypes = {
  data: PropTypes.instanceOf({
    site: {
      siteMetadata: {
        services: PropTypes.arrayOf({
          link: PropTypes.string,
          label: PropTypes.string,
          icon: PropTypes.string,
        }),
      },
    },
  }).isRequired,
};

export default Services;
export const query = graphql`
  query {
    site {
      siteMetadata {
        services {
          link
          label
          icon
        }
      }
    }
  }
`;
