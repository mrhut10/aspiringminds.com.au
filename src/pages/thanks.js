import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
