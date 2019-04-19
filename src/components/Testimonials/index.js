import React from 'react';
import Dexter from '../../images/dexter-square.jpg';
import OpenQuote from '../../images/open-quote.svg';
import CloseQuote from '../../images/close-quote.svg';

const Testimonials = () => (
  <section id="testimonial" className="mb-8">
    <h2 className="mb-8 text-4xl sm:text-5xl text-center">Testimonial</h2>
    <div className="bg-blue-0 max-w-lg mx-auto relative w-full">
      <img src={OpenQuote} className="open-quote" />
      <div className="w-full">
        <div className="bg-blue-0 border-l-8 border-blue-5 italic p-4 relative text-grey-darker">
          <img
            className="circle float-left mr-8 object-cover w-32 rounded-full"
            src={Dexter}
            alt=""
          />
          <div className="mb-8">
            <p>
              When I was in Year Four, school wasn't going as smoothly as it
              could have been. I was really struggling with my work and
              self-esteem. I didn't enjoy going to school at all. I was so happy
              to find out I had Mrs Ryals as my teacher in Year Five. She was
              new to the school and really took the time to get to know me and
              really understand me. She is very welcoming, warm and ready to
              help whenever needed. Very quickly I found my motivation improved,
              and so did my school work. Her classes were fun and challenging at
              times, and because of this, I began to enjoy school again. I
              thoroughly recommend Mrs Ryals to anyone who needs a little help
              regarding schooling, mood, self-esteem or motivation. I could not
              ask any more from Mrs Ryals.
            </p>
          </div>
          <h3 className="roman text-center text-grey-darkest">
            Dexter — former student
          </h3>
        </div>
        <img src={CloseQuote} className="close-quote" />
      </div>
    </div>
  </section>
);

const Testimonial = props => (
  <div className="max-w-sm overflow-hidden">
    <div className="sm:flex sm:items-center px-6 py-4">
      <img
        className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
        src={props.image}
        alt=""
      />
      <div className="text-center sm:text-left sm:flex-grow">
        <div className="mb-4">
          <h3 className="text-xl leading-tight">{props.name}</h3>
          <p className="italic text-grey-dark">"{props.children}"</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
