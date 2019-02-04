import React from 'react';

import Header from './header';
import Footer from './footer';
import '../css/style.css';
import './layout.css';

const Layout = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Header />
    <main className="flex flex-col flex-1 md:justify-start w-full">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
