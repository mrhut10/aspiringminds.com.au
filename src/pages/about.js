import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Skew from '../components/Skew';
import Tagline from '../components/Tagline';

import Image from '../images/about.svg';

const About = () => (
  <Layout>
    <SEO
      title="About"
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
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="max-w-sm mx-auto p-4 text-xl">
          <h1>About Aspiring Minds</h1>
          <p>
            Aspiring Minds Educational Intervention (Aspiring Minds) has emerged
            from experience gleaned over 40 years of teaching and observing
            young people learn and develop both within and outside classroom
            situations.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 md:p-8 w-full sm:w-1/2">
        <img className="p-4 md:p-8 w-full" src={Image} alt="" />
      </div>
    </div>

    <Skew>
      <p className="max-w-sm p-4 self-start text-3xl">
        At Aspiring Minds, students are provided with a positive and safe
        environment, with clear boundaries for discipline.
      </p>
      <div className="font-sans max-w-md p-4 self-start text-grey-darkest text-xl">
        <div>
          <p>
            We recognise the benefit of applying principles of consistency and
            fairness within a framework of honesty, integrity and authenticity
            which builds a respectful and tolerant atmosphere among the students
            and between the students and staff.
          </p>
          <p>
            The improvement in students’ self-esteem and confidence is extremely
            gratifying to all involved.
          </p>
        </div>
      </div>
    </Skew>

    <div className="flex flex-wrap">
      <div className="flex items-center justify-center p-4 md:p-8 w-full sm:w-1/2">
        <img className="p-4 md:p-8 w-full" src={Image} alt="" />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="max-w-sm mx-auto p-4 text-xl">
          <h1>Meredith Ryals</h1>
          <p>
            With a passion for teaching, our Principal, Meredith Ryals,
            recognises the benefit to young people of exposure to a holistic
            learning environment. Each student is recognised as a unique
            individual and treated as such.
          </p>
        </div>
      </div>
    </div>
    <Tagline />
  </Layout>
);

export default About;
