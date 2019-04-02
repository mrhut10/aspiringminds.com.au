import React from 'react';

const Footer = () => (
  <footer className="p-4 text-sm">
    <Social />
    <p className="flex items-center justify-center text-grey-dark w-full">
      <div>Aspiring Minds © {new Date().getFullYear()}</div>
      <div className="mx-2">&bull;</div>
      <div>
        <span className="mr-1">Website by</span>
        <a
          className="font-bold"
          href="https://phirannodesigns.com.au"
          rel="nofollow"
        >
          Phiranno Designs
        </a>
      </div>
    </p>
    <BackToTop />
  </footer>
);

const Social = () => (
  <div className="flex items-center justify-center max-w-xs mx-auto my-4 w-full">
    <a
      href="https://www.facebook.com/aspiringminds"
      className="border-2 hover:border-blue-5 flex group items-center justify-center p-3 rounded-full w-12"
      aria-label="Facebook"
    >
      <svg
        className="fill-current text-grey-dark group-hover:text-blue-5 w-full"
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.41421"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.819-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
          fillRule="nonzero"
        />
      </svg>
    </a>

    <a
      href="mailto:mryals@aspiringminds.com.au"
      className="border-2 hover:border-blue-5 flex group items-center justify-center mx-6 p-3 rounded-full w-12"
      aria-label="Email"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-current text-grey-dark group-hover:text-blue-5 w-full"
      >
        <path d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z" />
        <path d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" />
      </svg>
    </a>

    <a
      href="tel:0412522849"
      className="border-2 hover:border-blue-5 flex group items-center justify-center p-3 rounded-full w-12"
      aria-label="Phone"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-current flex h-full text-grey-dark group-hover:text-blue-5 w-full"
      >
        <path d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z" />
        <path d="M14.7 10.7a1 1 0 0 1-1.4-1.4L17.58 5H15a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6.41l-4.3 4.3z" />
      </svg>
    </a>
  </div>
);

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
        fillRule="evenodd"
        d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
      />
    </svg>
  </a>
);

export default Footer;
