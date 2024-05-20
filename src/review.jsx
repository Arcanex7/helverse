import React from "react";
import "./rev.css";
import img1 from "./assets/motionarteffect-img4.png";
import img2 from "./assets/motionarteffect-img2.png";
import img3 from "./assets/motionarteffect-img1.png";
import img4 from './assets/motionarteffect-img3.png';

const Rev = () => {
  return (
    <>
      <h3 className="rev-h">Trusted by thousands of users around the world</h3>
      <div className="rev-main">
        <div className="rev-item">
          <img src={img2} alt="" className="rev-img" />
          <img src={img1} alt="" className="rev-img" />
          <p className="rev-text">
            <span>4.5</span> Score, 9 Reviews
          </p>
        </div>
        <div className="rev-item">
          <img src={img3} alt="" className="rev-img" />
          <img src={img1} alt="" className="rev-img" />
          <p className="rev-text">
            <span>4.5</span> Score, 9 Reviews
          </p>
        </div>
        <div className="rev-item">
          <img src={img4} alt="" className="rev-img" />
          <img src={img1} alt="" className="rev-img1" />
          <p className="rev-text">
            <span>4.5</span> Score, 9 Reviews
          </p>
        </div>
      </div>
    </>
  );
};

export default Rev;
