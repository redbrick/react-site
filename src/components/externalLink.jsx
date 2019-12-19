import React from 'react';
import PropTypes from 'prop-types';

export const ExternalLink = ({ to, children, style, className }) => (
  <a style={style} className={className} href={to} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

ExternalLink.defaultProps = {
  style: {},
  className: '',
};
