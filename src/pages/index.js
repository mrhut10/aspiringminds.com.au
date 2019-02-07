import React from 'react';

import Header from '../components/header';
import Hero from '../components/hero';
import Skew from '../components/skew';
import Cards from '../components/cards';
import Button from '../components/button';
import Footer from '../components/footer';
import SEO from '../components/seo';

import Phone from '../../content/assets/phone.svg';
import Mail from '../../content/assets/mail.svg';

import '../css/tailwind.css';

const IndexPage = () => (
  <div className="bg-white flex flex-col font-sans min-h-screen text-grey-darkest">
    <SEO
      title="Home page"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Header />
    <Hero />
    <Skew>
      <div className="cards items-center justify-around text-center w-full">
        <div>Motivate.</div>
        <div>Educate.</div>
        <div>Elevate.</div>
      </div>
    </Skew>
    <Cards />
    <Skew>
      <div className="text-xl">
        <h2 className="text-5xl">Contact us for any further enquires</h2>
        <Button link="/contact" title="Contact" />
      </div>
    </Skew>
    <Skew>
      <div className="text-xl">
        <h2 className="text-5xl">For more information, please email us</h2>
        <Button
          svg={Mail}
          link="mailto:mryals@aspiringminds.com.au"
          title="mryals@aspiringminds.com.au"
        />
      </div>
    </Skew>
    <br />
    <Skew>
      <div className="text-xl">
        <h2 className="text-5xl">Call us today for a free consultation</h2>
        <Button
          svg={Phone}
          link="tel:0412522849"
          title="0412&nbsp;522&nbsp;849"
        />
      </div>
    </Skew>
    <Footer />
  </div>
);

export default IndexPage;
