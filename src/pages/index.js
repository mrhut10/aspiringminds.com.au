import React from 'react';
import SEO from '../components/seo';
import Nav from '../components/header';

const IndexPage = () => (
  <div className="font-sans">
    <div className="h-screen max-w-4xl p-4 md:p-12 w-full">
      <div className="index bg-no-repeat bg-left bg-cover bg-blue-0 flex flex-1 flex-wrap h-full items-center rounded-lg shadow-lg w-full">
        <div className="max-w-xs mx-auto md:w-1/3 w-full">
          <h1 className="text-5xl">Call to Action!</h1>
          <p>Stuff about Aspiring Minds should go in here ;-)</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            numquam labore, ipsa ad totam, maiores suscipit, ipsam quia ipsum
            vitae rem. Ex labore voluptas, a soluta nesciunt consequatur dolores
            libero!
          </p>
          <p>
            <button>I'm a button</button>
          </p>
        </div>
        <div className="flex items-center justify-center h-full max-w-md mx-auto md:w-2/3 w-full" />
      </div>
    </div>
    <div className="max-w-lg mx-auto overflow-hidden rounded-lg max-w-3xl shadow-lg sticky pin-t w-full">
      <Nav />
    </div>
    <div>HELLO</div>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />
  </div>
);

export default IndexPage;
