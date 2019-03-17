import React from 'react';

const GetInTouch = () => {
  return (
    <div className="mb-4 md:mb-0 w-full md:w-1/2">
      <div className="h-full m-4 md:ml-0 px-4 py-8">
        <div className="leading-normal max-w-sm mx-auto text-xl w-full">
          <h2 className="md:text-3xl">Get in touch</h2>

          <p>
            Please reach out to us if you have any questions, we'd love to hear
            from you!
          </p>

          <p>We will get back to you as soon as possible.</p>

          <p>
            <div>
              <strong className="block font-bold font-display text-xs tracking-wide uppercase">
                Phone:
              </strong>
            </div>
            <div>
              <a href="tel:0412522849">0412&nbsp;522&nbsp;849</a>
            </div>
          </p>

          <p>
            <div>
              <strong className="block font-bold font-display text-xs tracking-wide uppercase">
                Email:
              </strong>
            </div>
            <div>
              <a href="mailto:mryals@aspiringminds.com.au">
                mryals@aspiringminds.com.au
              </a>
            </div>
          </p>

          <p>
            <strong className="block font-bold font-display text-xs tracking-wide uppercase">
              Address:
            </strong>
            <a href="https://goo.gl/maps/Fk2pQHrmQw12">
              <p className="mb-0">39 Clifton Drive</p>
              <p>Port Macquarie</p>
            </a>
          </p>

          <p>
            <strong className="block font-bold font-display mb-2 text-xs tracking-wide uppercase">
              Hours:
            </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Monday &ndash; Friday</td>
                <td>9:00am &ndash; 5:00pm</td>
              </tr>
              <tr>
                <td>Weekends</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
