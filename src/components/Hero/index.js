import React from 'react';

import Button from '../Button';
import Phone from '../../images/phone.svg';
import Image from '../../images/woman-and-child.svg';

const Hero = () => (
  <section className="fade-in-up hero flex flex-col flex-1 justify-center mb-16 w-full">
    <div className="flex flex-wrap p-4 md:p-8">
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-xl md:text-2xl w-full sm:w-1/2">
        <h1 className="mb-2 md:text-5xl">Call now for a free consultation!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          dignissimos molestias sequi animi dolorum quas tempora aperiam? Sit
          rem libero eum modi aspernatur vitae optio qui, dignissimos reiciendis
          ipsam et?
        </p>
        <Button
          svg={Phone}
          link="tel:0412522849"
          title="0412&nbsp;522&nbsp;849"
        />
      </div>
      <div className="flex items-center justify-center p-4 md:p-8 w-full sm:w-1/2">
        <img className="w-full" src={Image} alt="" />
      </div>
    </div>
  </section>
);

export default Hero;
