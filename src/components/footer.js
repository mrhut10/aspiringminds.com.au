import React from 'react';

const Footer = () => (
  <footer className="p-4">
    <p className="flex font-bold items-center justify-center max-w-2xl mx-auto w-full">
      <span className="mr-1">Website by</span>
      <a
        className="no-underline text-teal-dark"
        href="https://lukebennett.com.au"
      >
        Luke Bennett
      </a>
    </p>

    <a
      href="#top"
      className="bg-teal-lighter hidden md:flex fixed h-10 items-end justify-center leading-none mb-16 mr-16 no-underline pin-b pin-r rounded-full shadow-lg w-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-current text-teal-darker h-full w-full"
      >
        <path
          className="secondary"
          fill-rule="evenodd"
          d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
        />
      </svg>
    </a>
  </footer>
);

export default Footer;
