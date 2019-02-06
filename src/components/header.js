import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../content/assets/icon.svg';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = () => (
  <header
    css={{ background: `hsla(360, 100%, 100%, .95)` }}
    className="header bg-white border-b font-display pin-t sticky z-10"
  >
    <div className="md:flex h-full w-full">
      <div className="flex h-full items-center">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center ml-4 no-underline text-grey-darkest"
          >
            <img className="h-12 mr-2" src={Logo} alt="" />
          </Link>

          <button
            className="flex md:hidden p-3 text-grey-darkest"
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
        className=" bg-white border-b md:border-none hidden md:flex flex-1 md:items-center justify-end w-full md:w-auto"
      >
        <NavLink link="/about" title="About" />
        <NavLink link="/our-approach" title="Our approach" />
        <NavLink link="/services" title="Services" />
        <NavLink link="/contact" title="Contact" />
        <NavLink link="/blog" title="Blog" />
      </nav>
    </div>
  </header>
);

const NavLink = props => (
  <Link
    to={props.link}
    className="overline block md:inline-block border-t md:border-0 font-bold no-underline px-6 py-4 text-grey-darker hover:text-blue-6"
  >
    {props.title}
  </Link>
);

export default Header;
