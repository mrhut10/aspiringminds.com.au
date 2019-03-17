import React from 'react';
import LazyLoad from 'react-lazy-load';

const Map = () => {
  return (
    <div className="p-4 w-full">
      <LazyLoad height={400}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2376332534027!2d152.88546881514844!3d-31.435124281397854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff1050581643%3A0x884f591e6dbfce6d!2s39+Clifton+Dr%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1549241524635"
          className="w-full"
          height={400}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </LazyLoad>
    </div>
  );
};

export default Map;
