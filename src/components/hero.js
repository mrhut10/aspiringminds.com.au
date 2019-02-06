import React from 'react';
import Image from '../../content/assets/woman-and-child.svg';

const Hero = () => {
  return (
    <section className="hero flex flex-col flex-1 justify-center mb-12 w-full">
      <div className="flex flex-wrap p-4 md:p-8">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-xl md:text-2xl w-full md:w-1/2">
          <h1 className="leading-tight mb-2 md:text-5xl">
            Call now for a free consultation!
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dignissimos molestias sequi animi dolorum quas tempora
            aperiam? Sit rem libero eum modi aspernatur vitae optio qui,
            dignissimos reiciendis ipsam et?
          </p>
          <p className="flex mt-8 w-full">
            <a
              href="tel:0412522849"
              className="btn gradient bg-blue-5 hover:bg-blue-4 flex font-display font-bold items-center justify-center no-underline px-4 py-2 relative rounded-full text-white tracking-wide uppercase"
            >
              <span className="flex mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mr-4 icon-phone-outgoing-call"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
                    className="fill-current text-white"
                  />
                  <path
                    d="M14.7 10.7a1 1 0 0 1-1.4-1.4L17.58 5H15a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6.41l-4.3 4.3z"
                    className="fill-current text-blue-1"
                  />
                </svg>
              </span>
              <span>0412 522 849</span>
            </a>
          </p>
        </div>
        <div className="p-4 md:p-8 w-full md:w-1/2">
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
