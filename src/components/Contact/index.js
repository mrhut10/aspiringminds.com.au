import React from 'react';
import GetInTouch from './GetInTouch';
import HowCanWeHelp from './HowCanWeHelp';
import Map from './Map';

const Contact = () => {
  return (
    <div className="flex flex-wrap mb-4 w-full">
      <GetInTouch />
      <HowCanWeHelp />
      <Map />
    </div>
  );
};

export default Contact;
