import React from 'react';
import SEO from '../../components/seo.jsx';
import Layout from '../../components/layout.jsx';
import Page from '../../components/page.jsx';

import contactPage from '../../content/contact.js';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Page page={contactPage} />
  </Layout>
);

export default Contact;
