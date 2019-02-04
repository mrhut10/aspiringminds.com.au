import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FormConent from '../components/form';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-wrap w-full">
        <div className="mb-4 md:mb-0 w-full md:w-2/3">
          <div className="bg-blue-0 h-full m-4 my-0 px-4 py-8">
            <div className="max-w-sm mx-auto w-full">
              <h2 className="md:text-3xl">Info</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className=" bg-blue-9 h-full m-4 my-0 md:ml-0 px-4 py-8 text-white">
            <div className="max-w-sm mx-auto w-full">
              <h2 className="md:text-3xl">Social</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap-reverse mb-4 w-full">
        <Form />
        <GetInTouch />
      </div>
      <div className="flex items-center justify-center m-4 mt-0 md:mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2376332534027!2d152.88546881514844!3d-31.435124281397854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff1050581643%3A0x884f591e6dbfce6d!2s39+Clifton+Dr%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1549241524635"
          allowFullScreen
          frameBorder={0}
          height={400}
          style={{ border: 0 }}
          title="location"
          width={1600}
        />
      </div>
      <SEO title="Contact" />
    </Layout>
  );
};

const Form = () => (
  <div className="mb-4 md:mb-0 w-full md:w-1/2">
    <div className=" bg-blue-9 h-full m-4 md:mb-4 px-4 py-8 text-white">
      <div className="max-w-sm mx-auto w-full">
        <h2 className="md:text-3xl">How can we help?</h2>
        <FormConent />
      </div>
    </div>
  </div>
);

const GetInTouch = () => (
  <div className="mb-4 md:mb-0 w-full md:w-1/2">
    <div className="bg-blue-0 h-full m-4 md:ml-0 px-4 py-8">
      <div className="leading-normal max-w-sm mx-auto text-xl w-full">
        <h2 className="md:text-3xl">Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          nesciunt nobis eum beatae dicta debitis repellendus, soluta ipsam at
          necessitatibus corrupti aperiam unde laboriosam provident, vero rerum
          illo, saepe ullam.
        </p>
        <p>
          Saepe, hic minus? Amet ipsum repudiandae officia sit quod id inventore
          explicabo, nesciunt, aliquam fuga ratione asperiores maxime odio
          recusandae vitae assumenda fugit nam nobis sunt incidunt illo eaque
          illum! Magnam, atque delectus! Neque animi ullam, eligendi, quibusdam,
          voluptatem adipisci natus dolor ab in praesentium est libero! Mollitia
          veniam, architecto natus possimus, dolor suscipit nesciunt ex nulla
          aspernatur officia placeat.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
