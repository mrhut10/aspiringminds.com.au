import React from 'react';
import propTypes from 'prop-types';

const Skew = ({ children }) => (
  <section className="skew bg-blue-0 flex font-bold font-display items-center justify-center mb-24 overflow-x-auto overflow-y-hidden pin-l pb-32 pt-16 px-4 md:px-8 text-blue-6 text-3xl w-full">
    {children}
  </section>
);

Skew.propTypes = {
  children: propTypes.object,
};

export default Skew;
