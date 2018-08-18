import React, { Component } from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  render() {
    return (
      <div className="container">
        <NavBar
          onMenuClick={this.toggleSideBar}
          sidebarVisible={this.state.sidebarVisible}
        >
          <div className="homeStyle">
            <AboutSection />
            <div className="contactSection">
              <h3 align="left">Let's Connect</h3>
              <br />
              12bpalomino@gmail.com<br />
            </div>
          </div>
        </NavBar>
      </div>
    );
  }
}
