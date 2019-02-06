import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';

import Image from '../../content/assets/woman-and-child.svg';

const IndexPage = () => (
  <div className="bg-white flex flex-col font-sans min-h-screen text-grey-darkest">
    <SEO
      title="Home page"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Header />
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-wrap p-4 md:p-8">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-xl md:text-2xl w-full md:w-1/2">
          <h1 className="leading-tight mb-2 md:text-5xl">
            Call now for a free consultation!
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dignissimos molestias sequi animi dolorum quas tempora
            aperiam? Sit rem libero eum modi aspernatur vitae optio qui,
            dignissimos reiciendis ipsam et?
          </p>
          <p className="flex mt-8 w-full">
            <a
              href="tel:0412522849"
              className="btn gradient bg-blue-5 hover:bg-blue-4 flex font-display font-bold items-center justify-center no-underline px-4 py-2 relative rounded-full text-white tracking-wide uppercase"
            >
              <span className="flex mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    className="fill-current text-white"
                    d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
                  />
                  <path
                    className="fill-current text-blue-1"
                    d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"
                  />
                </svg>
              </span>
              <span>0412 522 849</span>
            </a>
          </p>
        </div>
        <div className="p-4 md:p-8 w-full md:w-1/2">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default IndexPage;
