import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>About</h1>
      <p>
        Aspiring Minds Educational Intervention (Aspiring Minds) has emerged
        from experience gleaned over 40 years of teaching and observing young
        people learn and develop both within and outside classroom situations.
      </p>

      <p>
        With a passion for teaching, our Principal, Meredith Ryals, recognises
        the benefit to young people of exposure to a holistic learning
        environment. Each student is recognised as a unique individual and
        treated as such.
      </p>

      <p>
        At Aspiring Minds, students are provided with a positive and safe
        environment, with clear boundaries for discipline. We recognise the
        benefit of applying principles of consistency and fairness within a
        framework of honesty, integrity and authenticity which builds a
        respectful and tolerant atmosphere among the students and between the
        students and staff. The improvement in students’ self-esteem and
        confidence is extremely gratifying to all involved.
      </p>
    </Layout>
  );
};

export default About;
