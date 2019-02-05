import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home page"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <div className="text-center">
      <h1>Hello World</h1>
    </div>
  </Layout>
);

export default IndexPage;
