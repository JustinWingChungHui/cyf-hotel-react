import React from "react";

const Footer = props => {
  return (
    <ul className="Footer">
      {props.contactDetails.map(c => (
        <li>{c}</li>
      ))}
    </ul>
  );
};

export default Footer;
