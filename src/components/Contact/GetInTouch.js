import React from 'react';

const GetInTouch = () => (
  <div className="mb-4 md:mb-0 w-full md:w-1/2">
    <div className="h-full md:ml-0 px-4 py-8">
      <div className="leading-normal max-w-sm mx-auto text-xl w-full">
        <h2 className="md:text-3xl">Get in touch</h2>

        <p>
          Please call or email, or contact us through the website if you have
          any questions, we'd love to hear from you!
        </p>

        <p>We will get back to you as soon as possible.</p>

        <h3 className="block font-bold font-display m-0 text-xs tracking-wide uppercase">
          Phone:
        </h3>
        <p>
          <a href="tel:0412522849">0412&nbsp;522&nbsp;849</a>
        </p>

        <h3 className="block font-bold font-display m-0 text-xs tracking-wide uppercase">
          Email:
        </h3>
        <p>
          <a href="mailto:mryals@aspiringminds.com.au">
            mryals@aspiringminds.com.au
          </a>
        </p>

        <h3 className="block font-bold font-display m-0 text-xs tracking-wide uppercase">
          Address:
        </h3>
        <p>
          <a href="https://goo.gl/maps/rS9ex8U8uhy">
            <span>The Clifton Centre</span>
            <br />
            <span>38 Clifton Drive</span>
            <br />
            <span>Port Macquarie, 2444</span>
          </a>
        </p>

        <h3 className="block font-bold font-display mb-2 text-xs tracking-wide uppercase">
          Hours:
        </h3>
        <table>
          <tbody>
            <tr>
              <td>Monday&nbsp;&ndash;&nbsp;Friday</td>
              <td>3:30pm&nbsp;&ndash;&nbsp;6:30pm</td>
            </tr>
            <tr>
              <td>Weekends</td>
              <td>9:00am&nbsp;&ndash;&nbsp;5:00pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default GetInTouch;
