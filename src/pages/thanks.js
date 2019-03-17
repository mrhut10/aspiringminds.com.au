import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Thanks = () => {
  return (
    <Layout>
      <SEO title="Message sent" />
      <div>
        <h1>Message Sent</h1>
        <p>
          Thanks for reaching out to us. We will respond to you as soon as
          possible.
        </p>
      </div>
    </Layout>
  );
};

export default Thanks;
