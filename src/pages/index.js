import React from 'react';

import Header from '../components/header';
import Hero from '../components/hero';
import Skew from '../components/skew';
import { About, OurApproach, Blog } from '../components/cards';
import Button from '../components/button';
import { Contact } from './contact';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import SEO from '../components/seo';

import PhoneIcon from '../../content/assets/phone.svg';
import MailIcon from '../../content/assets/mail.svg';
import ContactIcon from '../../content/assets/contact.svg';

import '../css/tailwind.css';

const IndexPage = () => (
  <div className="bg-white flex flex-col font-sans max-w-4xl mx-auto min-h-screen text-grey-darkest w-full">
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
    <About />
    <Skew>
      <div className=" md:text-center text-xl uppercase">
        <h2 className="md:text-5xl normal-case">
          Contact us for any further enquires
        </h2>
        <Button svg={ContactIcon} link="/contact" title="Contact" />
      </div>
    </Skew>
    <OurApproach className="flex-wrap-reverse" />
    <Skew>
      <div className=" md:text-center text-xl">
        <h2 className="md:text-5xl">
          Call us today to give your child a brighter future
        </h2>
        <Button
          svg={PhoneIcon}
          link="tel:0412522849"
          title="0412&nbsp;522&nbsp;849"
        />
      </div>
    </Skew>
    <Blog />
    <Skew>
      <div className=" md:text-center text-xl">
        <h2 className="md:text-5xl">For more information, please email us</h2>
        <Button
          svg={MailIcon}
          link="mailto:mryals@aspiringminds.com.au"
          title="mryals@aspiringminds.com.au"
        />
      </div>
    </Skew>
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
