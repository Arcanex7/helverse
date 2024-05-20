import React from "react";
import './curs.css';
import img1 from './assets/motionarteffect-img5.png';

const Curs = () => {
  return (
    <>
      <div className="main-cur">
        <div className="para">
          <h1>
            Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
            Visitors
          </h1>
          <p className="cur-p">
            Motion Art for Elementor is a groundbreaking plugin that empowers you
            to effortlessly infuse
            <br /> your website with visually stunning motion art
            elements.
          </p>
        </div>
        <div className="cur-img">
          <img src={img1} alt="Motion Art Example" />
        </div>
      </div>
      <div className="btn-container">
        <a href="#" className="btns">Purchase From Envato</a>
      </div>
    </>
  );
};

export default Curs;
