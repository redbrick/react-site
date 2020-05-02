import React from 'react';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { ExternalLink } from './externalLink.jsx';

export default function Navbar() {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              name
              to
              external
            }
          }
        }
        file(relativePath: { eq: "logo-light.png" }) {
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
    <div className="Navbar">
      <Link to="/">
        <Img fluid={file.childImageSharp.fluid} className="Logo" alt="Redbrick Logo" />
      </Link>
      <ul>
        {site.siteMetadata.menu.map(link => (
          <li key={link.name}>
            {'external' in link && link.external ? (
              <ExternalLink className="inactive" to={link.to}>
                {link.name}
              </ExternalLink>
            ) : (
              <Link activeClassName="active" className="inactive" to={link.to}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
