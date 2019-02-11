import React from 'react';

import Header from '../components/header';
import FormContent from '../components/form';
import Footer from '../components/footer';
import SEO from '../components/seo';

import LazyLoad from 'react-lazy-load';

import '../css/tailwind.css';

const ContactPage = () => (
  <div className="bg-white flex flex-col font-sans max-w-4xl mx-auto min-h-screen text-grey-darkest w-full">
    <SEO title="Contact" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
    <Header />
    <Contact />
    <Footer />
  </div>
);

export const Contact = () => (
  <>
    <div className="flex flex-wrap mb-4 w-full">
      <GetInTouch />
      <Form />
    </div>
    <div className="flex items-center justify-center m-4 mt-0 md:mt-4">
      <LazyLoad height={400} offset={0}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2376332534027!2d152.88546881514844!3d-31.435124281397854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff1050581643%3A0x884f591e6dbfce6d!2s39+Clifton+Dr%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1549241524635"
          allowFullScreen
          height={400}
          className="w-screen"
          style={{ border: 0 }}
          title="location"
        />
      </LazyLoad>
    </div>
  </>
);

const Form = () => (
  <div className="mb-4 md:mb-0 w-full md:flex-1">
    <div className="h-full m-4 md:mb-4 px-4 py-8">
      <div className="max-w-sm mx-auto w-full">
        <h2 className="md:text-3xl">How can we help?</h2>
        <FormContent />
      </div>
    </div>
  </div>
);

const GetInTouch = () => (
  <div className="mb-4 md:mb-0 w-full md:w-1/2">
    <div className="h-full m-4 md:ml-0 px-4 py-8">
      <div className="leading-normal max-w-sm mx-auto text-xl w-full">
        <h2 className="md:text-3xl">Get in touch</h2>

        <p>
          Please reach out to us if you have any questions, we'd love to hear
          from you!
        </p>

        <p>We will get back to you as soon as possible.</p>

        <p>
          <div>
            <strong className="block font-bold font-display text-xs tracking-wide uppercase">
              Phone:
            </strong>
          </div>
          <div>
            <a href="tel:0412522849">0412&nbsp;522&nbsp;849</a>
          </div>
        </p>

        <p>
          <div>
            <strong className="block font-bold font-display text-xs tracking-wide uppercase">
              Email:
            </strong>
          </div>
          <div>
            <a href="mailto:mryals@aspiringminds.com.au">
              mryals@aspiringminds.com.au
            </a>
          </div>
        </p>

        <p>
          <strong className="block font-bold font-display text-xs tracking-wide uppercase">
            Address:
          </strong>
          <a href="https://goo.gl/maps/Fk2pQHrmQw12">
            <p className="mb-0">39 Clifton Drive</p>
            <p>Port Macquarie</p>
          </a>
        </p>

        <p>
          <strong className="block font-bold font-display mb-2 text-xs tracking-wide uppercase">
            Hours:
          </strong>
        </p>
        <table>
          <tbody>
            <tr>
              <td>Monday &ndash; Friday</td>
              <td>9:00am &ndash; 5:00pm</td>
            </tr>
            <tr>
              <td>Weekends</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ContactPage;
