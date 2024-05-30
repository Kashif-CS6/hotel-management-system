import React from "react";

const Mapcomponent = ({ w, h, rounded, res }) => {
  console.log(`rounded-${rounded}`);
  return (
    <div className={`bg-red-200 ${res} md:${w} rounded-${rounded}`}>
      <div>
        <iframe
          className={`w-full ${h} rounded-${rounded} `}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6633.286087852363!2d72.35107633740455!3d33.76988886172626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1815618f89f9%3A0x1a7765258d2099c3!2sAttock%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708688824090!5m2!1sen!2s"
          width="900"
          height="1000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapcomponent;
