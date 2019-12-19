import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export default function Error({ code, message, children }) {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "glitch_brick.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ marginLeft: '2em', alignSelf: 'center' }}>
        {code} - {message} :(
      </h1>
      <Img
        fluid={file.childImageSharp.fluid}
        style={{ borderRadius: '50%', width: 'fit-content', alignSelf: 'center' }}
        alt="Glitch Brick"
      />
      <h2 style={{ marginLeft: '3em', alignSelf: 'center' }}>{children}</h2>
    </div>
  );
}

Error.propTypes = {
  code: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
