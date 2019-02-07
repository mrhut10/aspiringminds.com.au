import React from 'react';

const Footer = () => (
  <footer className="p-4 text-sm">
    <p className="flex items-center justify-center w-full">
      <div>Aspiring Minds © {new Date().getFullYear()} &bull;</div>
      <div>
        <span className="font-bold mr-1">&nbsp;Website by</span>
        <a href="https://phirannodesigns.com.au" rel="nofollow" target="_blank">
          Phiranno Designs
        </a>
      </div>
    </p>

    <BackToTop />
  </footer>
);

// const Icons = (props) => ()

const BackToTop = () => (
  <a
    href="#top"
    className="bg-blue-0 hidden md:flex fixed h-12 items-end justify-center leading-none mb-16 mr-16 no-underline pin-b pin-r rounded-full shadow-lg w-12"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="fill-current text-blue-6 h-full w-full"
    >
      <path
        className="secondary"
        fill-rule="evenodd"
        d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
      />
    </svg>
  </a>
);

export default Footer;
