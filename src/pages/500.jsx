import React from 'react';

import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Error from '../components/error.jsx';

const title = 'Internal Server Error';

const Error500 = () => (
  <Layout>
    <SEO title={title} />
    <Error code="500" message={title}>
      An Unexpected Error has occured. Please try again or contact the{' '}
      <a style={{ color: 'crimson' }} href="mailto:webmaster@redbrick.dcu.ie">
        webmaster
      </a>{' '}
      with details.
    </Error>
  </Layout>
);

export default Error500;
