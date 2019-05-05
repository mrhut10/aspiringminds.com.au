import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import OpenQuote from '../../images/open-quote.svg';
import CloseQuote from '../../images/close-quote.svg';

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      fragment menuSectionFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query MenuSectionQuery {
        dexter: file(relativePath: { eq: "dexter-square.jpg" }) {
          ...menuSectionFluidImage
        }
        gabrielle: file(relativePath: { eq: "gabrielle-square.jpg" }) {
          ...menuSectionFluidImage
        }
        annalise: file(relativePath: { eq: "annalise-square.jpg" }) {
          ...menuSectionFluidImage
        }
      }
    `}
    render={data => (
      <section id="testimonial" className="mb-8">
        <h2 className="mb-8 text-4xl sm:text-5xl text-center">Testimonial</h2>
        <div className="bg-blue-0 max-w-lg mb-16 mx-auto relative w-full">
          <img src={OpenQuote} className="open-quote" alt="" />
          <div className="w-full">
            <div className="bg-blue-0 border-l-8 border-blue-5 clearfix italic px-4 py-8 relative text-grey-darker">
              <Img
                className="circle float-left mr-8 object-cover w-32 rounded-full"
                fluid={data.dexter.childImageSharp.fluid}
              />
              <div className="mb-8">
                <p>
                  When I was in Year Four, school wasn't going as smoothly as it
                  could have been. I was really struggling with my work and
                  self-esteem. I didn't enjoy going to school at all. I was so
                  happy to find out I had Mrs Ryals as my teacher in Year Five.
                  She was new to the school and really took the time to get to
                  know me and really understand me. She is very welcoming, warm
                  and ready to help whenever needed. Very quickly I found my
                  motivation improved, and so did my school work. Her classes
                  were fun and challenging at times, and because of this, I
                  began to enjoy school again. I thoroughly recommend Mrs Ryals
                  to anyone who needs a little help regarding schooling, mood,
                  self-esteem or motivation. I could not ask any more from Mrs
                  Ryals.
                </p>
              </div>
              <cite className="block float-left font-bold font-display roman text-center text-grey-darkest text-xl w-full">
                Dexter — former student
              </cite>
            </div>
            <img src={CloseQuote} className="close-quote" alt="" />
          </div>
        </div>
        <div className="bg-blue-0 max-w-lg mb-16 mx-auto relative w-full">
          <img src={OpenQuote} className="open-quote" alt="" />
          <div className="w-full">
            <div className="bg-blue-0 border-l-8 border-blue-5 clearfix italic px-4 py-8 relative text-grey-darker">
              <Img
                className="circle float-left mr-8 object-cover w-32 rounded-full"
                fluid={data.gabrielle.childImageSharp.fluid}
              />
              <div className="mb-8">
                <p>
                  I’m not sure how to thank you enough Meredith. My beautiful
                  teenage daughter has been struggling in Maths for a while now.
                  A few weeks with you and she is a different child. She has
                  found her confidence and self-esteem again. She is less
                  anxious about tests and is getting results she never thought
                  were possible. Thank you, and I would love to recommend you to
                  anyone looking for a tutor/mentor.
                </p>
              </div>
              <cite className="block float-left font-bold font-display roman text-center text-grey-darkest text-xl w-full">
                Gabrielle Baker — parent of current student
              </cite>
            </div>
            <img src={CloseQuote} className="close-quote" alt="" />
          </div>
        </div>
        <div className="bg-blue-0 max-w-lg mb-16 mx-auto relative w-full">
          <img src={OpenQuote} className="open-quote" alt="" />
          <div className="w-full">
            <div className="bg-blue-0 border-l-8 border-blue-5 clearfix italic px-4 py-8 relative text-grey-darker">
              <Img
                className="circle float-left mr-8 object-cover w-32 rounded-full"
                fluid={data.annalise.childImageSharp.fluid}
              />
              <div className="mb-8">
                <p>
                  I went from getting 12/40 on a maths test to third in my
                  class! Meredith has helped me to build confidence in my skills
                  and taught me better, more understandable ways of doing
                  things.
                </p>
              </div>
              <cite className="block float-left font-bold font-display roman text-center text-grey-darkest text-xl w-full">
                Annalise — current student
              </cite>
            </div>
            <img src={CloseQuote} className="close-quote" alt="" />
          </div>
        </div>
      </section>
    )}
  />
);

export default Testimonials;
