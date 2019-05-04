import React from 'react';
import propTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tagline from '../components/Tagline';

import Image from '../images/approach.svg';

const OurApproach = () => (
  <Layout>
    <SEO
      title="Our approach"
      keywords={[
        `tutor port macquarie`,
        `tutoring port macquarie`,
        `maths tutor port macquarie`,
        `english tutor port macquarie`,
        `physics tutor port macquarie`,
        `student tutor network port macquarie`,
      ]}
    />
    <div className="flex flex-wrap">
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-xl md:text-2xl w-full sm:w-1/2">
        <div className="p-4 mb-8">
          <h1>Our Approach</h1>
          <p>
            At Aspiring Minds we recognise that our students are individuals
            with differing needs and we tailor our approach accordingly.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:p-8 w-full sm:w-1/2">
        <img className="p-4 w-full" src={Image} alt="" />
      </div>
    </div>
    <div className="max-w-3xl mx-auto py-8">
      <div className="services">
        <Service title="Environment">
          <p>
            We have established a positive deep-learning and inclusive
            environment in which students can develop into constructive and
            active individuals or group learners.
          </p>
        </Service>
        <Service title="Individual attention">
          <p>
            Whether in an individual or group environment, our programs provide
            an opportunity for students to develop and maintain self-esteem and
            a positive-growth mindset.
          </p>
        </Service>
        <Service title="Ability recognition">
          <p>
            Our programs cater for individual differences and inspire a
            realistic belief in students’ respective abilities.
          </p>
        </Service>
      </div>
      <div className="services">
        <Service title="Inclusivity">
          <p>
            We listen to and acknowledge the different roles played by students
            themselves, parents and other key stakeholders in seeking the best
            outcomes for each student.
          </p>
        </Service>
        <Service title="Gender diversity">
          <p>
            We recognise that gender is an issue within the sphere of learning
            and that this can require a differentiated approach for each student
            to achieve the best outcomes.
          </p>
        </Service>
        <Service title="Tolerance and respect">
          <p>
            We assist each student in developing as a responsible learner and
            showing tolerance to and respect for other students and themselves.
          </p>
        </Service>
      </div>
    </div>
    <Tagline />
  </Layout>
);

const Service = ({ title, children }) => (
  <div className="max-w-sm mx-auto px-4 py-8 w-full">
    <h2>{title}</h2>
    {children}
  </div>
);

Service.propTypes = {
  title: propTypes.string,
  children: propTypes.arrayOf(propTypes.element),
};

export default OurApproach;
