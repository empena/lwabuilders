import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="leftNavStyles">
          <img
            className="logo"
            width="50"
            height="50"
            alt="lwa_logo"
            src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590618404/LWA/LOGO_No_name_l0fpjr.png"
          />
        </div>
        <div className="rightNavStyles">
          <a href="#services" className="navbutton">
            SERVICES
          </a>
          <a href="#reviews" className="navbutton">
            REVIEWS
          </a>
          <a href="#contact" className="navbuttonOne">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
