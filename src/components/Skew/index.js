import React from 'react';

const Skew = ({ children }) => {
  return (
    <section className="skew bg-blue-0 flex font-bold font-display items-center justify-center mb-24 overflow-x-auto overflow-y-hidden pin-l pb-32 pt-16 px-4 md:px-8 text-blue-6 text-3xl w-full">
      {children}
    </section>
  );
};

export default Skew;