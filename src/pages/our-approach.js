import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const OurApproach = () => {
  return (
    <Layout>
      <SEO
        title="Our approach"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <h1>Our Approach</h1>
      <p>
        At Aspiring Minds we recognise that our students are individuals and
        therefore seek to:
      </p>
      <ul>
        <li>
          establish a positive deep-learning and inclusive environment in which
          class members can be constructive as individual and group learners;
        </li>
        <li>
          provide an opportunity for students to develop and maintain
          self-esteem and a positive-growth mindset;
        </li>
        <li>
          inspire a realistic belief in students’ respective individual
          abilities;
        </li>
        <li>encourage, listen to and respect the student voice;</li>
        <li>
          recognise that gender is an issue within the sphere of learning;
        </li>
        <li>
          assist students to develop as responsible learners and show tolerance
          to and respect for each other and themselves;
        </li>
        <li>
          be inclusive of parents and other stakeholders and form a partnership
          in making decisions about each child’s learning;
        </li>
        <li>
          invite parent/stakeholder voice and listen to their perspective and
          opinion;
        </li>
        <li>be an active contributing member of the whole school community;</li>
      </ul>
    </Layout>
  );
};

export default OurApproach;
