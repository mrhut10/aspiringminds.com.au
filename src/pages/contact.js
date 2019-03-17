import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

import '../css/tailwind.css';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[
        `tutor port macquarie`,
        `tutoring port macquarie`,
        `maths tutor port macquarie`,
        `english tutor port macquarie`,
        `physics tutor port macquarie`,
        `student tutor network port macquarie`,
      ]}
    />
    <Contact />
  </Layout>
);

export default ContactPage;
