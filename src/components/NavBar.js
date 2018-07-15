import React, { Component } from "react";
import "../styles/NavBar.css";
import linkedlogo from "../res/linkedin.png";
import githublogo from "../res/github.png";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/iconic/";
import { ic_close } from "react-icons-kit/md/";
import { Sidebar, Segment, Responsive } from "semantic-ui-react";

const DesktopNavMenu = ({ children }) => {
  return (
    <div>
      <div className="navMenu StickyContainer">
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
      {children}
    </div>
  );
};

const MobileNavMenu = ({ onMenuClick, sidebarVisible, children }) => {
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
          <div className="sideTopBar" onClick={onMenuClick}>
            <Icon icon={ic_close} size={25} />
          </div>
        </div>
      </Sidebar>
      <Sidebar.Pusher>
        <div>
          <div className="mobileNav StickyContainer">
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
          {children}
        </div>
      </Sidebar.Pusher>
    </div>
  );
};

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Responsive minWidth={651}>
          <DesktopNavMenu children={this.props.children} />
        </Responsive>
        <Responsive maxWidth={650}>
          <MobileNavMenu
            onMenuClick={this.props.onMenuClick}
            sidebarVisible={this.props.sidebarVisible}
            children={this.props.children}
          />
        </Responsive>
      </div>
    );
  }
}
