import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tagline from '../components/tagline';

import Image from '../images/approach.svg';

const OurApproach = () => {
  return (
    <Layout>
      <SEO
        title="Our approach"
        keywords={[
          `tutor port macquarie`,
          `tutoring port macquarie`,
          `maths tutor port macquarie`,
          `english tutor port macquarie`,
          `physics tutor port macquarie`,
          `student tutor network port macquarie`,
        ]}
      />
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-xl md:text-2xl w-full sm:w-1/2">
          <div className="p-4 mb-8">
            <h1>Our Approach</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
              corporis aliquam labore ratione id autem rerum accusantium, nihil
              laborum dolore facilis cum vero quisquam vel magnam reprehenderit
              et debitis quaerat!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 md:p-8 w-full sm:w-1/2">
          <img className="p-4 w-full" src={Image} alt="" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-8">
        <div className="services">
          <Service title="First">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              corrupti suscipit, aliquid cum in odio ea quidem quis optio
              similique voluptas praesentium. Harum iure distinctio eius.
              Numquam iure laudantium commodi?
            </p>
          </Service>
          <Service title="Second">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem illo
              magni eos maxime incidunt ea quibusdam suscipit voluptatum
              impedit? A excepturi sunt eius laudantium ut, tempore quibusdam
              assumenda repellat. Quia.
            </p>
          </Service>
          <Service title="Third">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              nam blanditiis commodi, perferendis reprehenderit consequatur
              voluptatem nulla facere a nisi illo maxime eum soluta. Aspernatur
              velit iure rerum impedit quam?
            </p>
          </Service>
        </div>
        <div className="services">
          <Service title="Fourth">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
              vitae est alias assumenda voluptatum quia neque deserunt soluta
              accusamus, facilis sint ea nisi non corporis consectetur id
              recusandae mollitia.
            </p>
          </Service>
          <Service title="Fifth">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              explicabo alias animi quidem dolor similique dolores sed ipsum
              neque, accusantium cum aperiam harum! Atque, dicta reprehenderit
              nihil sint blanditiis nulla?
            </p>
          </Service>
          <Service title="Sixth">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              nemo voluptatibus quas rem iure rerum doloremque obcaecati omnis
              adipisci quo a, odio autem reprehenderit reiciendis atque quasi,
              nobis explicabo deserunt!
            </p>
          </Service>
        </div>
      </div>
      <Tagline />
    </Layout>
  );
};

const Service = props => (
  <div className="max-w-sm mx-auto px-4 py-8 w-full">
    <h2>{props.title}</h2>
    {props.children}
  </div>
);

export default OurApproach;
