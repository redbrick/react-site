import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ page }) => (
  <div className="Main">
    <div className="Page-Section">
      {page.headings.map(heading => (
        <div key={heading} className="Page-Heading">
          <h1>{heading}</h1>
        </div>
      ))}
      {page.sections.map(section => (
        <span key={section.heading}>
          <div className="Section-Heading">
            <h1>{section.heading}</h1>
            <h2>
              {Object.prototype.hasOwnProperty.call(section, 'link') ? (
                <a href={section.link}>{section.subtitle}</a>
              ) : (
                section.subtitle
              )}
            </h2>
          </div>
          {section.paragraphs.map(para => (
            <p key={para} className="Section">
              {para}
            </p>
          ))}
        </span>
      ))}
    </div>
  </div>
);

Page.propTypes = {
  page: PropTypes.instanceOf({
    headings: PropTypes.arrayOf(PropTypes.string),
    section: PropTypes.arrayOf(
      PropTypes.instanceOf({
        heading: PropTypes.string,
        link: PropTypes.string,
        subtitle: PropTypes.string,
        paragraphs: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }).isRequired,
};

export default Page;
