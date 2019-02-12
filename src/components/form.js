import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        className="p-4 w-full"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label className="block font-bold mb-6 text-xs tracking-wide uppercase">
            <span className="block font-display mb-2">Full name:</span>
            <input
              className="appearance-none bg-blue-0 block border leading-tight px-4 py-3 rounded-none text-base w-full focus:bg-white focus:border-blue-5 focus:outline-none hover:bg-white"
              type="text"
              name="name"
              required
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label className="block font-bold mb-6 text-xs tracking-wide uppercase">
            <span className="block font-display mb-2">Phone number:</span>
            <input
              className="appearance-none bg-blue-0 block border leading-tight px-4 py-3 rounded-none text-base w-full focus:bg-white focus:border-blue-5 focus:outline-none hover:bg-white"
              type="text"
              name="phone"
              required
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label className="block font-bold mb-6 text-xs tracking-wide uppercase">
            <span className="block font-display mb-2">Email address:</span>
            <input
              className="appearance-none bg-blue-0 block border leading-tight px-4 py-3 rounded-none text-base w-full focus:bg-white focus:border-blue-5 focus:outline-none hover:bg-white"
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label className="block font-bold mb-6 text-xs tracking-wide uppercase">
            <span className="block font-display mb-2">Message:</span>
            <textarea
              className="appearance-none bg-blue-0 block border h-48 leading-tight px-4 py-3 rounded-none text-base text-grey-darker w-full focus:bg-white focus:border-blue-5 focus:outline-none hover:bg-white"
              name="message"
              required
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p className="flex">
          <button
            className="btn gradient bg-blue-5 hover:bg-blue-4 flex font-display font-bold items-center justify-center no-underline px-4 py-2 relative rounded-full text-white text-sm md:text-lg tracking-wide uppercase"
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    );
  }
}
