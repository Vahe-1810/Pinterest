import React from "react";
import logo from "../../assets/174863.png";
import "./header.css";
import { PAGES } from "../../constants";

const Header = () => {
  return (
    <header>
      <div className="head-left">
        <div className="logo">
          <img src={logo} alt="logo" height={30} width={30} />
          <h3>Pinterest</h3>
        </div>
        <div className="actions">
          <button>Watch</button>
          <button>Explore</button>
        </div>
      </div>
      <div className="head-right">
        <div className="pages">
          {PAGES.map((page, i) => (
            <div key={i} className="page">
              {page}
            </div>
          ))}
        </div>
        <div className="auth">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
