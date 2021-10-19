import React from "react";
import logo from "../../logo.svg";
import styles from "./about-style.module.css";

const About = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.heading}>About</h2>
      <div>
        <p>Welcome to our about page</p>
        <img className={styles.img} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default About;
