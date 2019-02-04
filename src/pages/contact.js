import React from 'react';
import Layout from '../components/layout';
import FormConent from '../components/form';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-wrap w-full">
        <Form />
        <GetInTouch />
      </div>
      <div className="flex items-center justify-center p-4 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2376332534027!2d152.88546881514844!3d-31.435124281397854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff1050581643%3A0x884f591e6dbfce6d!2s39+Clifton+Dr%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1549241524635"
          width={1600}
          height={400}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </Layout>
  );
};

const Form = () => (
  <div className="mb-4 w-full md:w-1/2">
    <div className=" bg-blue-0 h-full m-4 mb-8 md:mb-4 px-4 py-8">
      <div className="max-w-sm mx-auto w-full">
        <h2 className="text-center">How can we help?</h2>
        <FormConent />
      </div>
    </div>
  </div>
);

const GetInTouch = () => (
  <div className="mb-4 w-full md:w-1/2">
    <div className="bg-blue-0 h-full m-4 md:ml-0 px-4 py-8">
      <div className="max-w-sm mx-auto w-full">
        <h2 className="text-center">Get in touch</h2>
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
        <p>
          Nam, ex molestias reprehenderit accusamus repudiandae, aperiam placeat
          error beatae necessitatibus explicabo eius rerum corrupti, quam ut ea.
          Excepturi assumenda eius nobis blanditiis qui sequi at unde?
          Consequatur, omnis atque.
        </p>
        <p>
          Quas nesciunt possimus beatae natus in sit fugiat tenetur quia modi
          ea, repudiandae similique pariatur commodi ipsam? Voluptate,
          distinctio facilis? Non velit quisquam sit beatae asperiores, unde
          quas modi obcaecati!
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
