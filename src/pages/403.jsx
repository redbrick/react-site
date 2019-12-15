import React from 'react';
import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Error from '../components/error.jsx';

const title = 'Forbidden';

const Error403 = () => (
  <Layout>
    <SEO title={title} />
    <Error code="403" message={title}>
      Access to this section Forbidden.
    </Error>
  </Layout>
);

export default Error403;
