import React from 'react';
import { Link } from 'gatsby';
import About from '../../content/assets/about.svg';
import Approach from '../../content/assets/approach.svg';
import Blog from '../../content/assets/blog.svg';

const Cards = () => {
  return (
    <section className="cards w-full">
      <div>
        <Link to="/about">
          <img src={About} alt="" />
          <h2>About Us</h2>
        </Link>
      </div>
      <div>
        <Link to="/our-approach">
          <img src={Approach} alt="" />
          <h2>Our Approach</h2>
        </Link>
      </div>
      <div>
        <Link to="/blog">
          <img src={Blog} alt="" />
          <h2>Blog</h2>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
