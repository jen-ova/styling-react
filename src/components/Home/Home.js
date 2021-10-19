import React from "react";
import HomeStyles from "./HomeStyles";

const Home = () => {
  return (
    <div style={HomeStyles.div}>
      <h2 style={HomeStyles.h2}>Home</h2>
      <p>
        Today we will be learning about the different styling techniques in
        react
      </p>
      <ul>
        <li style={HomeStyles.li}>CSS stylesheets</li>
        <li style={HomeStyles.li}>Inline styles - for our home page</li>
        <li style={HomeStyles.li}>CSS-in-JS</li>
        <li style={HomeStyles.li}>CSS modules</li>
      </ul>
    </div>
  );
};

export default Home;
