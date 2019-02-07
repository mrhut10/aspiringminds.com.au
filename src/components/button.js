import React from 'react';

const Button = (props) => {
  return (
    <p className="flex mt-8 w-full">
      <a
        href="tel:0412522849"
        className="btn gradient bg-blue-5 hover:bg-blue-4 flex font-display font-bold items-center justify-center no-underline px-4 py-2 relative rounded-full text-white tracking-wide uppercase"
      >
        <span className="flex mr-2">
          <img className="h-6 w-6" src={props.svg} alt="" />
        </span>
        <span>{props.title}</span>
      </a>
    </p>
  );
};

export default Button;
