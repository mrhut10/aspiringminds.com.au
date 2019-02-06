import React from 'react';

import Header from '../components/header';
import Hero from '../components/hero';
import Cards from '../components/cards';
import Footer from '../components/footer';
import SEO from '../components/seo';

const IndexPage = () => (
  <div className="bg-white flex flex-col font-sans min-h-screen text-grey-darkest">
    <SEO
      title="Home page"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Header />
    <Hero />
    <Cards />
    <Footer />
  </div>
);

export default IndexPage;
