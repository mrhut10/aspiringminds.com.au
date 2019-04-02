import React from 'react';
import Skew from '../Skew';

const Tagline = () => (
  <Skew>
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center leading-none m-0 w-full">
      <h2 className="text-3xl">Motivate</h2>
      <span className="hidden sm:block mx-6">|</span>
      <h2 className="text-3xl">Educate</h2>
      <span className="hidden sm:block mx-6">|</span>
      <h2 className="text-3xl">Elevate</h2>
    </div>
  </Skew>
);

export default Tagline;
