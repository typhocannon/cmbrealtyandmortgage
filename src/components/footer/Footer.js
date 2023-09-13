import React from "react";
import "./Footer.css"
import MasterLogo from "../../images/Masterlogo1-modified.png"
const Footer = () => {
    return (
        <div className="page-foot">
            <div className="footer-container">
                <div className="logo">
                    <img src={MasterLogo} alt="Logo"></img>
                </div>

                <div className="footer-text">
                    <h1>Contact us</h1>
                    <h2>892 Horcajo Street, Milpitas, CA 95035</h2>
                    <h2>Phone: (408) 416-3963  |  Fax: (888) 258-9029</h2>
                    <h2>Email: cbui@comcast.net</h2>
                    <h2>BRE #: 01934309 | NMLS #: 1079239</h2>
                </div>

                <div className="copyright">
                    <p>Copyright 2006-2023 CMB Realty & Mortgage, Inc. All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;