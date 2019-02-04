import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Logo from '../images/icon.svg';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <header className="bg-white border-b font-display pin-t shadow sticky">
    <div className="md:flex w-full">
      <div className="flex items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center no-underline text-grey-darkest"
          >
            <img className="h-8 mr-2 w-8" src={Logo} alt="" />
            <span className="font-bold">{siteTitle}</span>
          </Link>

          <button
            className="block md:hidden text-grey-darkest"
            onClick={handleClick}
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
        className="hidden md:flex md:items-center mx-auto w-full md:w-auto"
      >
        <NavLink link="/contact/" title="Contact" />
        <NavLink link="/" title="Second" />
        <NavLink link="/" title="Third" />
      </nav>
    </div>
  </header>
);

const NavLink = props => (
  <Link
    to={props.link}
    className="block md:inline-block border-t md:border-0 font-bold no-underline px-6 py-4 uppercase text-grey-darkest"
  >
    {props.title}
  </Link>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
