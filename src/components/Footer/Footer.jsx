import React from "react";
import "./footer.css";
import { FOOTER_LINKS } from "../../constants";

const Footer = () => {
  return (
    <footer>
      {FOOTER_LINKS.map((linkTo) => (
        <div className="footer-links" key={linkTo}>
          {linkTo}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
