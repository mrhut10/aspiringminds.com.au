import React from 'react';
import { Link } from 'gatsby';
import AboutImage from '../../content/assets/about.svg';
import OurApproachImage from '../../content/assets/approach.svg';
import BlogImage from '../../content/assets/blog.svg';

export const About = () => (
  <Card
    link="/about"
    img={AboutImage}
    title="About Us"
    body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ipsam
      nesciunt libero quod enim dolorum id esse alias harum assumenda velit
      accusamus ad, corporis magni et tenetur aliquam expedita eius!"
  />
);

export const OurApproach = () => (
  <Card
    reverse
    link="/our-approach"
    img={OurApproachImage}
    title="Our Approach"
    body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sequi
        omnis at, numquam totam alias similique debitis nesciunt, dolorum
        error ex excepturi nihil. Magnam libero aspernatur dolores animi,
        laborum accusantium?"
  />
);

export const Blog = () => (
  <Card
    link="/blog"
    img={BlogImage}
    title="Blog"
    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit sapiente suscipit aliquam quibusdam eaque debitis, cum ratione totam voluptates. Quaerat pariatur consequatur omnis nulla illum sapiente eius voluptas harum!"
  />
);

const Card = props => (
  <section
    className={`flex ${
      props.reverse ? 'flex-row-reverse' : 'flex-row'
    } flex-wrap mb-12 p-4`}
  >
    <Link className="w-full md:w-1/3" to={props.link}>
      <div className="flex items-center justify-center w-full">
        <img className="text-center w-48 md:w-full" src={props.img} alt="" />
      </div>
    </Link>
    <div className="w-full md:w-2/3">
      <div className="max-w-md mx-auto w-full">
        <Link to={props.link}>
          <h2 className="md:text-4xl mt-8 mb-2 md:mt-0">{props.title}</h2>
        </Link>
        <p className="font-normal text-grey-darker">{props.body}</p>
      </div>
    </div>
  </section>
);
