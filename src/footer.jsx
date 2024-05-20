import React from "react";
import './footer.css';


const Footer = () => {
    return(
        <div className="main-container">
        <div className="cpy">
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix </p>
        </div>
        <div className="lst">
            <ol>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support</a></li>

            </ol>
        </div>
        </div>

    );
}
export default Footer;