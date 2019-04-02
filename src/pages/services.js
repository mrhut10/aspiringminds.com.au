import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tagline from '../components/Tagline';

import Image from '../images/woman-and-child.svg';

const Services = () => (
  <Layout>
    <SEO
      title="Services"
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
          <h1>Services</h1>
          <p>We are a one-stop-shop for all your child’s educational needs.</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:p-8 w-full sm:w-1/2">
        <img className="p-4 w-full" src={Image} alt="" />
      </div>
    </div>
    <div className="max-w-3xl mx-auto py-8">
      <div className="services">
        <Service title="Age Groups">
          <p>
            Aspiring Minds provides for infant/primary aged children, generally
            in the 4 to 12 year age group.
          </p>
        </Service>
        <Service title="Areas Taught">
          <p>
            We teach all infant/primary subjects, specialising in all areas of
            literacy and numeracy. Our staff are all qualified and up-to-date
            with current curriculum requirements and technology.
          </p>
        </Service>
        <Service title="Ability Levels">
          <p>
            Each student is a unique individual and each has a different level
            of ability. Aspiring Minds recognises this and caters for all levels
            of ability. We deliver differentiated wholistic programs taking each
            student’s social, emotional and intellectual level into account.
          </p>
        </Service>
      </div>
      <div className="services">
        <Service title="Educational Intervention">
          <p>
            Many students have been assessed by one or more health care
            professionals as requiring specific intervention in the educational
            area because of a particular issue. We provide educational
            intervention when this is recommended by our health care
            professional collaborators.
          </p>
        </Service>
        <Service title="Rich Assessment Tasks">
          <p>
            These enable students to use and develop their imagination and
            communication skills.
          </p>
        </Service>
        <Service title="Programs">
          <p>
            Our programming is comprehensive and based on the NSW Curriculum
            (NESA) The range provided includes individual, group and holiday
            programs.
          </p>
        </Service>
      </div>
    </div>
    <Tagline />
  </Layout>
);

const Service = props => (
  <div className="max-w-sm mx-auto px-4 py-8 w-full">
    <h2>{props.title}</h2>
    {props.children}
  </div>
);

export default Services;
