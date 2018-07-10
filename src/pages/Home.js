import React, { Component } from "react";
import "../styles/Home.css";
import linkedlogo from "../res/linkedin.png";
import githublogo from "../res/github.png";
import { SizeMe } from "react-sizeme";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/iconic/";

const NavMenu = ({ width }) => {
  return <div>{width > 650 ? <FullNavMenu /> : <MobileNavMenu />}</div>;
};

const FullNavMenu = () => {
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
        <div className="gitlogoContainer">
          <a href="https://github.com/bpalomino5">
            <img src={githublogo} alt="gitlogo" width="70px" />
          </a>
        </div>
        <a href="https://www.linkedin.com/in/brandon-palomino/">
          <img src={linkedlogo} alt="logo" width="35px" />
        </a>
      </div>
    </div>
  );
};

const MobileNavMenu = () => {
  return (
    <div className="mobileNav">
      <div className="topRow">
        <div className="mobileHeader">
          <h1 className="title">Brandon Palomino</h1>
        </div>
        <div className="iconContainer">
          <Icon icon={menu} size={25} />
        </div>
      </div>
      <div className="logoRow">
        <a href="https://github.com/bpalomino5">
          <img src={githublogo} alt="gitlogo" width="60px" />
        </a>
        <div className="linkedlogoContainer">
          <a href="https://www.linkedin.com/in/brandon-palomino/">
            <img src={linkedlogo} alt="logo" width="30px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <SizeMe>{({ size }) => <NavMenu width={size.width} />}</SizeMe>
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
