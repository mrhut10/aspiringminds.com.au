import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />
    <div className="flex flex-col flex-1 items-center justify-center h-full w-full">
      <h1 className="text-5xl">Hello World!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        asperiores. Iusto odit culpa quas saepe. Enim aliquam, modi error
        cupiditate asperiores excepturi est reprehenderit et voluptatibus, quia
        nihil delectus repellendus.
      </p>
      <p className="text-grey-darkest">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        asperiores. Iusto odit culpa quas saepe. Enim aliquam, modi error
        cupiditate asperiores excepturi est reprehenderit et voluptatibus, quia
        nihil delectus repellendus.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
