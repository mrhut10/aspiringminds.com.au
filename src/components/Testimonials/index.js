import React from 'react';

const Testimonials = () => (
  <section className="px-4 py-16">
    <h2 className="mb-8 text-center text-5xl">Testimonials</h2>
    <div className="cards">
      <Testimonial name="Jen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eius
          earum maxime possimus doloremque. Dolores at mollitia quod, voluptatum
          possimus maxime fugit. Eum sequi soluta mollitia magnam dolore
          molestiae suscipit.
        </p>
      </Testimonial>

      <Testimonial name="Catherine">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          saepe placeat repellat molestias possimus tenetur accusamus hic porro
          corrupti, cum consequuntur aspernatur dolore veritatis, quam fuga
          explicabo incidunt fugiat tempora.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          quisquam ut! Earum ex dolores, eveniet enim architecto necessitatibus
          quisquam! Quo numquam vitae repellendus nobis unde animi,
          necessitatibus vel. Corporis, blanditiis?
        </p>
      </Testimonial>

      <Testimonial name="Andrew">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic
          facere eum, excepturi dignissimos, aliquid suscipit tempora aliquam
          quod, laboriosam debitis. Est dicta eius eveniet mollitia perferendis
          nobis, quibusdam aliquid!
        </p>
      </Testimonial>
    </div>
  </section>
);

const Testimonial = props => (
  <div>
    <div>
      <h3 className="text-center">{props.name}</h3>
      <div className="italic text-grey-darker">{props.children}</div>
    </div>
  </div>
);

export default Testimonials;
