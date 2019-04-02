import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Button from '../components/Button';
import FourZeroFour from '../images/404.svg';
import Home from '../images/home.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="flex flex-wrap">
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <div className="max-w-sm mx-auto p-4 text-center text-xl">
          <h1>Page Not Found</h1>
          <p>The page you requested could not be found.</p>
          <Button svg={Home} link="/" title="Home page" />
        </div>
      </div>
      <div className="flex items-center justify-center p-4 md:p-8 w-full sm:w-1/2">
        <img
          className="max-w-sm sm:max-w-full p-4 md:p-8 w-full"
          src={FourZeroFour}
          alt=""
        />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
