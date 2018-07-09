import React, { Component } from "react";
import "../styles/Home.css";
import linkedlogo from "../res/linkedin.png";
import { Image, Label } from "react-bootstrap";

const NavMenu = () => {
  return (
    <div className="navMenu">
      <div className="header">
        <h1 className="title">Brandon Palomino</h1>
      </div>
      <div className="fullBar">
        <div className="row1">
          <a className="menuItem">Home</a>
          <a className="menuItem">Education</a>
          <a className="menuItem">Experience</a>
          <a className="menuItem">Portfolio</a>
        </div>
        <a href="https://www.linkedin.com/in/brandon-palomino/">
          <img src={linkedlogo} alt="logo" width="40px" />
        </a>
      </div>
    </div>
  );
};

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <NavMenu />
        <div className="homeStyle">
          <div className="aboutSection">
            <h3 align="left">About</h3>
            <p align="left">
              <br />Preface
              <br />
              <br />
              Welcome to my world. My life is filled with diversity amongst
              language, activities, and within my career. I constantly share my
              rich, hard earned knowledge and skills as a means to spread
              awareness, excitement, and passion for my craft with others. I
              self-motivate myself to achieve the best principles and practices
              of Software Engineering, Code Development, and the full blown user
              experience. My execution, organization, and creativitiy defines my
              confidence in any practical situation that I have gone through,
              with only a hunger to achieve more.
              <br />
              <br />
              <br />
              <br />
              <br />
              BS Computer Science - Cal Poly Pomona
            </p>
          </div>
          <div className="contactSection">
            <h3 align="left">Contact Me</h3>
            <br />
            12bpalomino@gmail.com<br />
          </div>
        </div>
      </div>
    );
  }
}
