import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-col items-center justify-center leading-normal py-16 text-center">
      <Link className="no-underline" to="/">
        <h1 className="font-condensed text-grey-darkest text-5xl uppercase">
          404: Page not found
        </h1>
        <p className="font-bold no-underline text-pink-dark text-lg">
          Click to return to the home page
        </p>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
