import React from "react";

const Footer = props => {
  return (
    <ul className="Footer">
      {props.contactDetails.map((c, index) => (
        <li key={index}>{c}</li>
      ))}
    </ul>
  );
};

export default Footer;
