import React from "react";
import logos from "./assets/motionarteffect-img8.png";
import './browser.css'

const Brw = () => {
  return (
    <div className="main-brw">
      <div>
        <h1 className="head-brw">Supported by All Popular Browsers</h1>
        <p className="brw-p">
          Rest assured, Motion Art is designed to be compatible <br /> with all major
          web browsers.
        </p>
      </div>
      <div className="img-logo">
        <img src={logos} alt="" />
      </div>
    </div>
  );
};
export default Brw;
