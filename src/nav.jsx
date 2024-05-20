import React from "react";
import img1 from './assets/MotionArtEffect-logo.png'
import './nav.css';

const Nav = () => {
    return (
        <div className="main-nav">
            <div className="nav">
                <img src={img1} alt="" />
                
            </div>
            <div className="btn">
                Purchase Now
            </div>
        </div>

    )
}
export default Nav;
