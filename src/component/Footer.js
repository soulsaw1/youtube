import React from "react";
import "../App.css";
const Footer = () => {
  const copy = new Date().getFullYear();
  return (
    <div>
      <p>copyrightÂ©{copy}</p>
    </div>
  );
};

export default Footer;
