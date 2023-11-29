import React, { forwardRef, useMemo } from "react";
import Description from "../../shared/Description";
import img1 from "../../assets/Screenshot 2023-11-21 145809.png";
import img2 from "../../assets/Screenshot 2023-11-21 145857.png";
import img3 from "../../assets/Screenshot 2023-11-21 150038.png";
import img4 from "../../assets/Screenshot 2023-11-21 150056.png";
import img5 from "../../assets/Screenshot 2023-11-21 150109.png";

const ThirdContent = () => {
  const style = useMemo(() => ({ color: "#c32f00" }), []);
  return (
    <div className="third-content" id="third">
      <div className="third-left">
        <Description
          head="Save ideas you like"
          paragraph="Collect your favourites so you can get back to them later."
          styles={style}
        />
      </div>
      <div className="third-right">
        <div className="third-right-container">
          <div className="image-1">
            <img src={img1} alt="" />
          </div>
          <div className="image-2">
            <img src={img2} alt="" />
          </div>
          <div className="image-3">
            <img src={img3} alt="" />
          </div>
          <div className="image-4">
            <img src={img4} alt="" />
          </div>
          <div className="image-5">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdContent;
