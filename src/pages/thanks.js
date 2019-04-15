import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Image from '../images/thanks.svg';
import Home from '../images/home.svg';

const Thanks = () => (
  <Layout>
    <SEO title="Message sent" />
    <div className="flex flex-wrap">
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <div className="max-w-sm mx-auto p-4 text-center text-xl">
          <h1>Message Sent</h1>
          <p>
            Thanks for reaching out to us. We will respond to you as soon as
            possible.
          </p>
          <Button svg={Home} link="/" title="Home page" />
        </div>
      </div>
      <div className="flex items-center justify-center p-4 md:p-8 w-full sm:w-1/2">
        <img
          className="max-w-sm sm:max-w-full p-4 md:p-8 w-full"
          src={Image}
          alt=""
        />
      </div>
    </div>
  </Layout>
);

export default Thanks;
