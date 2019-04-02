import React from 'react';

const Button = props => (
  <p className="flex justify-center mt-8 w-full">
    <a
      href={props.link}
      className="btn gradient bg-blue-5 hover:bg-blue-4 flex font-display font-bold items-center justify-center no-underline px-8 py-2 relative rounded-full text-white text-sm sm:text-lg md:text-2xl tracking-wide"
    >
      <span className="flex mr-2">
        <img className="h-4 md:h-6 w-4 md:w-6" src={props.svg} alt="" />
      </span>
      <span>{props.title}</span>
    </a>
  </p>
);

export default Button;
