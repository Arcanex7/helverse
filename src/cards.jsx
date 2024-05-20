import React from "react";
import "./cards.css";
import img1 from "./assets/motionarteffect-img6.png";
import img2 from "./assets/motionarteffect-img7.png";
import img3 from "./assets/motionarteffect-img9.png";

const Card = () => {
  return (
    <div className="container">
      <h1>
        An All-Round Plugin With <br /> Powerful Features
      </h1>
      <br />
      <p className="info">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for <br /> Elementor seamlessly integrates with the Elementor platform,
        providing you <br /> with a seamless and intuitive experience.
      </p>
      <div className="main-card">
        <div className="card">
          <div className="card-img">
            <img src={img3} alt="Light Weight" />
            <h1 className="title">Light Weight</h1>
            <p className="card-info">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
          <div className="card-img">
            <img src={img1} alt="100% Responsive" />
            <h1 className="title">100% Responsive</h1>
            <p className="card-info">
              Create a consistent visual experience across all devices.
            </p>
          </div>
          <div className="card-img">
            <img src={img2} alt="User Friendly Interface" />
            <h1 className="title">User Friendly Interface</h1>
            <p className="card-info">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
