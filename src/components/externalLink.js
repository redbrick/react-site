import React from 'react';

export const ExternalLink = ({ to, children, style }) => (
  <a style={style} href={to} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);
