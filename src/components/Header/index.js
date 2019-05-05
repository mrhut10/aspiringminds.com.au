import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Logo from '../Logo';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = () => (
  <header
    id="top"
    className="header bg-smokey-white font-display pin-t sticky z-10"
  >
    <div className="md:flex h-full w-full">
      <div className="flex h-full items-center">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center ml-4 no-underline text-grey-darkest"
          >
            <Logo />
            <h1 className="leading-none m-2 text-sm sm:text-lg sm:text-2xl">
              Aspiring&nbsp;Minds{' '}
              <span className="font-sans font-normal inline-block text-grey-darker">
                Educational&nbsp;Intervention
              </span>
            </h1>
          </Link>

          <button
            className="flex md:hidden p-3 text-grey-darkest"
            onClick={handleClick}
            type="button"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="nav"
        className="bg-white border-b md:border-none hidden md:flex flex-1 font-sans md:items-center justify-end w-full md:w-auto"
      >
        <div className="hidden xl:flex">
          <NavLink link="/" title="Home" />
        </div>
        <NavLink link="/about" title="About" />
        <NavLink link="/our-approach" title="Our&nbsp;Approach" />
        <NavLink link="/services" title="Services" />
        <NavLink link="/contact" title="Contact" />
        <a
          className="hidden xl:flex font-display items-center pl-6 py-3 hover:text-blue-4"
          href="tel:0412522849"
        >
          <span className="flex mr-4 p-2 rounded-full text-grey-dark hover:text-grey-darker">
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.41421"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="flex h-6 w-6 wobble"
            >
              <path
                className="fill-current"
                d="M2 0h4c.473 0 .885.336.98.8l1 5c.065.326-.036.664-.27.9L5.19 9.22c1.181 2.438 3.152 4.409 5.59 5.59l2.51-2.52c.236-.234.574-.335.9-.27l5 1c.47.1.81.5.81.98v4c0 1.097-.903 2-2 2h-2C7.223 20 0 12.777 0 4V2C0 .9.9 0 2 0z"
                fillRule="nonzero"
              />
              <path
                className="fill-current"
                d="M12.7 8.7c-.173.13-.384.2-.6.2-.549 0-1-.451-1-1 0-.216.07-.427.2-.6L15.58 3H13c-.549 0-1-.451-1-1 0-.549.451-1 1-1h5c.549 0 1 .451 1 1v5c0 .549-.451 1-1 1-.549 0-1-.451-1-1V4.41l-4.3 4.3V8.7z"
                fillRule="nonzero"
              />
            </svg>
          </span>

          <span />
        </a>
      </nav>
    </div>
  </header>
);

const NavLink = ({ link, title }) => (
  <Link
    to={link}
    className="overline block md:inline-block border-t md:border-0 font-bold no-underline px-6 py-4 text-grey-darker text-base hover:text-blue-6"
  >
    {title}
  </Link>
);

NavLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
