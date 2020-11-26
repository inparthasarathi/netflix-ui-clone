import "./css/Nav.css";

import React, { useState, useEffect } from "react";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_user"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="User icon"
      />
    </div>
  );
}

export default Nav;
