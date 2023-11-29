import React, { memo } from "react";

const Description = ({ head, paragraph, styles }) => {
  return (
    <div className="desc-container" style={styles}>
      <h1>{head}</h1>
      <p>{paragraph}</p>
      <button>Explore</button>
    </div>
  );
};

export default memo(Description);
