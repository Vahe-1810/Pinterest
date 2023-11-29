import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";

const Card = ({ img, style }) => {
  return (
    <animated.div style={style} className="img-col">
      <img src={img} alt="" />
      <img src={img} alt="" />
    </animated.div>
  );
};

export default Card;
