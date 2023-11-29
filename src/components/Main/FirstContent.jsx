import React from "react";
import Card from "./Card";

const FirstContent = ({ transition, step, setStep, setNode }) => {
  return (
    <div className="first-content" id="first">
      <h1 className="main-head">Get Your Next</h1>
      <div className="swipe">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="dot"
              key={i}
              style={{ background: i === step ? "red" : "" }}
              onClick={() => setStep(i)}
            />
          ))}
      </div>
      <div className="catagories">
        {transition((style, { url, id }) => (
          <Card img={url} step={step} style={style} key={id} />
        ))}
      </div>
      <div
        className="arrow-down"
        onClick={() => {
          setNode((node) => {
            node.next.value.scrollIntoView({ behavior: "smooth" });
            return node.next;
          });
        }}>
        ↓
      </div>
    </div>
  );
};

export default FirstContent;
