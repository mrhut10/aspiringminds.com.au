import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Tagline from '../components/Tagline';
import Skew from '../components/Skew';
import { About, OurApproach, Services } from '../components/Cards';
import Button from '../components/Button';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

import PhoneIcon from '../images/phone.svg';
import MailIcon from '../images/mail.svg';
import ContactIcon from '../images/contact.svg';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `tutor port macquarie`,
        `tutoring port macquarie`,
        `maths tutor port macquarie`,
        `english tutor port macquarie`,
        `physics tutor port macquarie`,
        `student tutor network port macquarie`,
      ]}
    />
    <Hero />
    <Tagline />
    <About />
    <Skew>
      <div className="text-center text-xl uppercase">
        <h2 className="md:text-5xl normal-case">
          Contact us for further enquiries
        </h2>
        <Button svg={ContactIcon} link="/contact" title="Contact" />
      </div>
    </Skew>
    <OurApproach className="flex-wrap-reverse" />
    <Skew>
      <div className="text-center text-xl">
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
    <Services />
    <Skew>
      <div className="text-center text-xl">
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
  </Layout>
);

export default IndexPage;
