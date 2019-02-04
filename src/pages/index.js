import React from 'react';
import SEO from '../components/seo';
import Nav from '../components/header';
import Image from '../images/back-to-school.svg';
import Mail from '../images/mail.svg';

const IndexPage = () => (
  <div className="font-sans h-screen">
    <div className="fixed pin-t pin-r pin-l">
      <Nav />
    </div>
    <div className="h-full max-w-4xl mt-20 md:mt-6 px-4 md:p-12 w-full">
      <div className="index bg-no-repeat bg-left bg-cover bg-blue-0 flex flex-1 flex-wrap h-full items-center py-8 rounded-lg shadow-lg w-full">
        <div className="leading-normal max-w-md md:mt-0 mx-auto px-4 md:px-8 md:w-1/2 w-full">
          <h1 className="text-5xl">Call to Action!</h1>
          <p>Stuff about Aspiring Minds should go in here ;-)</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            numquam labore, ipsa ad totam, maiores suscipit, ipsam quia ipsum
            vitae rem. Ex labore voluptas, a soluta nesciunt consequatur dolores
            libero!
          </p>
          <p className="flex justify-center md:justify-start mt-8">
            <a
              href="mailto:mryals@aspiringminds.com.au"
              className="bg-blue-5 hover:bg-blue-4 flex items-center justify-center font-bold font-display inline-block px-4 py-1 no-underline rounded-full shadow text-white text-base tracking-wide uppercase"
            >
              <span>
                <img className="h-6 mr-2 mt-1 w-6" src={Mail} alt="" />
              </span>
              <span>Contact Us</span>
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center max-w-md mx-auto overflow-hidden px-4 md:px-8 md:w-1/2 w-full">
          <img src={Image} alt="Woman kneeling down holding childs hands" />
        </div>
      </div>
    </div>

    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />
  </div>
);

export default IndexPage;
