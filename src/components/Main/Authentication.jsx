import React from "react";
import logo from "../../assets/174863.png";

const Authentication = ({ setNode, linkedList }) => {
  return (
    <div className="authentication" id="auth">
      <div
        className="arrow-up"
        onClick={() => {
          setNode(linkedList.head);
          linkedList.head.value.scrollIntoView({ behavior: "smooth" });
        }}>
        ↑
      </div>
      <div className="auth-container">
        <div className="auth-title">
          <h1 className="auth-header">Sign up to get your ideas</h1>
        </div>
        <div className="auth-fields-container">
          <div className="auth-paper">
            <div className="paper-logo">
              <img src={logo} alt="" height={40} width={40} />
            </div>
            <div className="paper-title">
              <h1>Welcome to Pinterest</h1>
              <p>Find new ideas to try</p>
            </div>
            <div className="paper-fields">
              <label htmlFor="email">Email address</label>
              <input type="text" placeholder="Email address" name="email" />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                name="password"
              />
              <label htmlFor="" name="date">
                Date of birth
              </label>
              <input type="date" name="date" />
            </div>
            <div className="paper-actions">
              <button>Continue</button>

              <span className="policy">
                By continuing, you agree to Pinterest's
                <div>
                  Opens a new tab
                  <b>Terms of Service;</b>
                  and acknowledge that you've read our
                </div>
                <div>
                  <b>Privacy Policy;</b>
                  Opens a new tab
                </div>
                .<a>Notice at collection; Opens a new tab</a>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
