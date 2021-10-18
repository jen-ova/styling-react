import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact-us">
          <li>Contact us</li>
        </NavLink>
      </ul>
  );
};

export default Navigation;
