import React from 'react';

import Header from './header.js';
import Footer from './footer.js';

import '../css/tailwind.css';

const Layout = ({ children }) => (
  <div className="bg-white flex flex-col font-sans min-h-screen text-grey-darkest">
    <Header />
    <main className="fade-in-up flex flex-col flex-1 max-w-md mx-auto px-4 py-8 md:p-8 w-full">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
