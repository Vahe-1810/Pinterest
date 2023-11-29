import React, { useMemo } from "react";
import rightTop from "../../assets/right-2bd1edfc.png";
import center from "../../assets/center-2d76a691.png";
import left from "../../assets/left-ccce7532.png";
import rightBottom from "../../assets/topRight-6902088a.png";
import Description from "../../shared/Description";

const SecondContent = () => {
  const style = useMemo(() => ({ color: "#c32f00" }), []);

  return (
    <div className="second-content" id="second">
      <div className="easy-chicken-dinner">
        <div className="food-container">
          <div className="right-top-image">
            <img src={rightBottom} alt="" width={178} height={218} />
          </div>
          <div className="center-image">
            <img src={center} alt="" width={298} height={456} />
          </div>
          <div className="left-image">
            <img src={left} alt="" width={204} height={285} />
          </div>
          <div className="rb-image">
            <img src={rightTop} alt="" width={164} height={258} />
          </div>
          <div className="field">
            <h3>easy chicken dinner</h3>
          </div>
        </div>
      </div>
      <div className="search-for-an-idea">
        <Description
          styles={style}
          head="Search for an idea"
          paragraph="What do you want to try next? Think of something you’re into – such
            as 'easy chicken dinner' – and see what you find."
        />
      </div>
    </div>
  );
};

export default SecondContent;
