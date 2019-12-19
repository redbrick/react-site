import React from 'react';

import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Error from '../components/error.jsx';

const title = 'Service Unavailable';

const Error503 = () => (
  <Layout>
    <SEO title={title} />
    <Error code="503" message={title}>
      The server cannot handle the request because it is overloaded or down for maintenance.
    </Error>
  </Layout>
);

export default Error503;
