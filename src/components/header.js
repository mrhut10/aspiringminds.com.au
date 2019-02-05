import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../content/assets/icon.png';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = () => (
  <header
    css={{ background: `hsla(360, 100%, 100%, .95)` }}
    className="bg-white font-display pin-t sticky z-10"
  >
    <div className="md:flex w-full">
      <div className="flex items-center p-4">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center no-underline text-grey-darkest"
          >
            <img className="h-8 mr-2 w-8" src={Logo} alt="" />
            <div className="font-bold">
              <span className="font-normal">Aspiring</span>
              <span className="font-bold"> Minds</span>
            </div>
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
        className="hidden md:flex flex-1 md:items-center justify-end px-4 w-full md:w-auto"
      >
        <NavLink link="/contact/" title="Contact" />
        <NavLink link="/blog/" title="Blog" />
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

export default Header;
