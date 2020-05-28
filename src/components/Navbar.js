import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="mainNav">
        <div className="leftNavStyles">
          <img
            className="logo"
            width="65"
            height="30"
            src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590618404/LWA/LOGO_NAME_white_xklb9c.png"
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
