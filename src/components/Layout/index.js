import React from 'react';
import propTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

import '../../css/tailwind.css';
import '../../css/typography.css';
import '../../css/global.css';

const Layout = ({ children }) => (
  <div
    dir="ltr"
    className="bg-white flex flex-col font-sans max-w-4xl min-h-screen mx-auto overflow-hidden text-grey-darkest w-full"
  >
    <Header />
    <main className="fade-in-up flex flex-col flex-1 mx-auto w-full">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

export default Layout;
