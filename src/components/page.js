import React from 'react';
import '../core.css';

const Page = ({ page }) => (
  <div className="Main">
    <div className="Page-Section">
      {page.headings.map((heading, i) => (
        <div className="Page-Heading">
          <h1>{heading}</h1>
        </div>
      ))}
      {page.sections.map(section => (
        <>
          <div className="Section-Heading">
            <h1>{section.heading}</h1>
            <h2>
              {section.hasOwnProperty('link') ? (
                <a href={section.link}>{section.subtitle}</a>
              ) : (
                section.subtitle
              )}
            </h2>
          </div>
          {section.paragraphs.map(para => (
            <p className="Section">{para}</p>
          ))}
        </>
      ))}
    </div>
  </div>
);

export default Page;
