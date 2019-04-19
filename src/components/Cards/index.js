import React from 'react';
import { Link } from 'gatsby';
import AboutImage from '../../images/about.svg';
import OurApproachImage from '../../images/approach.svg';
import ServicesImage from '../../images/services.svg';

export const About = () => (
  <Card
    link="/about"
    img={AboutImage}
    title="About Us"
    body="Over 40 years of teaching experience, combined with a wholistic learning environment, enables students to improve their self-esteem and confidence with greatly improved results."
  />
);

export const OurApproach = () => (
  <Card
    reverse
    link="/our-approach"
    img={OurApproachImage}
    title="Our Approach"
    body="Individual attention within an inclusive environment enables students to develop and maintain their self-esteem and move towards their individual capabilities."
  />
);

export const Services = () => (
  <Card
    link="/services"
    img={ServicesImage}
    title="Services"
    body="Individual or group programs, catering for all levels of ability, with comprehensive curriculum-based programming, specialising in all areas of literacy and numeracy."
  />
);

const Card = props => (
  <section
    className={`flex ${
      props.reverse ? 'flex-row-reverse' : 'flex-row'
    } flex-wrap mb-12 p-4`}
  >
    <div className="w-full md:w-1/3">
      <div className="flex items-center justify-center w-full">
        <img className="text-center w-48 md:w-full" src={props.img} alt="" />
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <div className="max-w-md mx-auto w-full">
        <Link to={props.link}>
          <h2 className="md:text-4xl mt-8 mb-2 md:mt-0">{props.title}</h2>
        </Link>
        <p className="font-normal text-grey-darker">{props.body}</p>
        <Link to={props.link}>
          <p className="text-blue-6 hover:text-blue-5 text-2xl hover:underline">
            Learn more&nbsp;&rarr;
          </p>
        </Link>
      </div>
    </div>
  </section>
);
