import React from 'react';
import LazyLoad from 'react-lazy-load';

const Map = () => (
  <div className="p-4 w-full">
    <LazyLoad height={400}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2138952939645!2d152.88626775088554!3d-31.435777904244908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff10ff6d9e1b%3A0x984e14da9587ca17!2s38+Clifton+Dr%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1554631119676!5m2!1sen!2sau"
        allowFullScreen
        className="w-full"
        frameBorder={0}
        height={400}
        style={{ border: 0 }}
        title="location"
      />
    </LazyLoad>
  </div>
);

export default Map;
