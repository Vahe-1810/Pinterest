import React, { useMemo } from "react";
import Description from "../../shared/Description";
import girl from "../../assets/shop-de8ddf10.png";

const FourthContent = () => {
  const style = useMemo(() => ({ color: "#c32f00" }), []);
  return (
    <div className="fourth-content" id="fourth">
      <div className="fourth-left">
        <img src={girl} alt="" className="girl" />
      </div>
      <div className="fourth-right">
        <Description
          head="See it, make it, try it, do it"
          paragraph="The best part of Pinterest is discovering new things and ideas from people around the world."
          styles={style}
        />
      </div>
    </div>
  );
};

export default FourthContent;
