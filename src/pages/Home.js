import React, { Component } from "react";
import "../styles/Home.css";
import linkedlogo from "../res/linkedin.png";
import githublogo from "../res/github.png";
import { SizeMe } from "react-sizeme";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/iconic/";
import { ic_close } from "react-icons-kit/md/";
import { Sidebar, Segment, SidebarPushable } from "semantic-ui-react";

const NavMenu = ({ width, onMenuClick, sidebarVisible, handleHide }) => {
  return (
    <div className="StickyContainer">
      {width > 650 ? (
        <FullNavMenu />
      ) : (
        <MobileNavMenu
          onMenuClick={onMenuClick}
          sidebarVisible={sidebarVisible}
          handleHide={handleHide}
        />
      )}
    </div>
  );
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

const MobileNavMenu = ({ onMenuClick, sidebarVisible, handleHide }) => {
  return (
    <div>
      <Sidebar
        as={Segment}
        animation="overlay"
        visible={sidebarVisible}
        vertical
        inverted
        width="wide"
      >
        <div className="sidebarContainer">
          <div className="sideTopBar" oncClick={() => console.log("hi")}>
            <Icon icon={ic_close} size={25} />
          </div>
        </div>
      </Sidebar>
      <Sidebar.Pusher>
        <div className="mobileNav">
          <div className="topRow">
            <div className="mobileHeader">
              <h1 className="mobileTitle">B. Palomino</h1>
            </div>
            <div className="iconContainer">
              <div onClick={onMenuClick}>
                <Icon icon={menu} size={25} />
              </div>
            </div>
          </div>
        </div>
      </Sidebar.Pusher>
    </div>
  );
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  toggleSideBar() {
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  handleHide() {
    this.setState({ sidebarVisible: false });
  }

  render() {
    return (
      <div className="container">
        <SizeMe>
          {({ size }) => (
            <NavMenu
              width={size.width}
              onMenuClick={this.toggleSideBar}
              sidebarVisible={this.state.sidebarVisible}
              handleHide={this.handleHide}
            />
          )}
        </SizeMe>
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
