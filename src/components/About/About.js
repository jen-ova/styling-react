import React from "react";
import logo from "../../logo.svg";

const About = () => {
  return (
    <div>
      <h2 className="heading">About</h2>
      <div>
        <p>Welcome to our about page</p>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default About;
