import React from 'react';
import { Link } from 'gatsby';
import About from '../../content/assets/about.svg';
import Approach from '../../content/assets/approach.svg';
import Blog from '../../content/assets/blog.svg';

const Cards = () => {
  return (
    <section className="cards w-full">
      <Card
        link="/about"
        img={About}
        title="About Us"
        body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ipsam
      nesciunt libero quod enim dolorum id esse alias harum assumenda velit
      accusamus ad, corporis magni et tenetur aliquam expedita eius!"
      />
      <Card
        link="/our-approach"
        img={Approach}
        title="Our Approach"
        body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sequi
        omnis at, numquam totam alias similique debitis nesciunt, dolorum
        error ex excepturi nihil. Magnam libero aspernatur dolores animi,
        laborum accusantium?"
      />
      <Card
        link="/blog"
        img={Blog}
        title="Blog"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        fugit sapiente suscipit aliquam quibusdam eaque debitis, cum ratione
        totam voluptates. Quaerat pariatur consequatur omnis nulla illum
        sapiente eius voluptas harum!"
      />
    </section>
  );
};

const Card = props => (
  <div className="flex-col p-4">
    <Link to={props.link}>
      <img className="h-48" src={props.img} alt="" />
      <h2 className="mt-8 text-center">{props.title}</h2>
    </Link>
    <p className="font-normal text-grey-darker">{props.body}</p>
  </div>
);

export default Cards;
