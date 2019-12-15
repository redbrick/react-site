import React from 'react';
import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Error from '../components/error.jsx';

const title = 'Permission Denied';

const Error401 = () => (
  <Layout>
    <SEO title={title} />
    <Error code="401" message={title}>
      You do not have permission to access this section. If you think this is an error please
      contact the{' '}
      <a style={{ color: 'crimson' }} href="mailto:webmaster@redbrick.dcu.ie">
        webmaster
      </a>
    </Error>
  </Layout>
);

export default Error401;
