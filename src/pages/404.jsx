import React from 'react';

import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Error from '../components/error.jsx';

const title = 'Page not Found';

const Error404 = () => (
  <Layout>
    <SEO title={title} />
    <Error code="404" message={title}>
      The Page you are looking for could not be found. If you think this is an error please contact
      the{' '}
      <a style={{ color: 'crimson' }} href="mailto:webmaster@redbrick.dcu.ie">
        webmaster
      </a>
    </Error>
  </Layout>
);

export default Error404;
