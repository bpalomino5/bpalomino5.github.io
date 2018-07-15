import React, { Component } from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";

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
            <div className="aboutSection">
              <h3 align="left">About</h3>
              <p align="left">
                <br />Preface
                <br />
                <br />
                Welcome to my world. My life is filled with diversity amongst
                language, activities, and within my career. I constantly share
                my rich, hard earned knowledge and skills as a means to spread
                awareness, excitement, and passion for my craft with others. I
                self-motivate myself to achieve the best principles and
                practices of Software Engineering, Code Development, and the
                full blown user experience. My execution, organization, and
                creativitiy defines my confidence in any practical situation
                that I have gone through, with only a hunger to achieve more.
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
        </NavBar>
      </div>
    );
  }
}
