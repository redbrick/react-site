import React from 'react';

import Page from '../../components/page.jsx';
import SEO from '../../components/seo.jsx';
import Layout from '../../components/layout.jsx';
import societyPage from '../../content/theSociety.js';

const Society = () => (
  <Layout>
    <SEO title="About Redbrick" />
    <Page page={societyPage} />
  </Layout>
);

export default Society;
